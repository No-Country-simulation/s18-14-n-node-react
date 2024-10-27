import { useEffect, useState } from "react";
import { ResponseErrorMessage, User } from "@/models";
import { defaultUserImage, ERROR_RESPONSE } from "@/constants";
import configureAxios from "@/services/axios";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import axios from "axios";



const defaultValues: User = {
  description: null,
  img: "",
  user: {
    email: "",
    username: ""
  }
}

interface DataToSend {
  description: string | null;
  image: File | null;
}


export default function Profile() {
    const [form, setForm] = useState<User>(defaultValues);
    const [dataToSend, setDataToSend] = useState<DataToSend>({
      description: form.description,
      image: null,
    });
    const areChanges = (dataToSend.description !== form.description || dataToSend.image !== null)


    const getUserData = async () => {
      const api = configureAxios();

      try {
        const { data }: { data: User } = await api.get('/profile');
        setForm(data);
      } catch (error) {
        console.log(error);
      }
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setDataToSend({
        ...dataToSend,
        [name]: value !== "" ? value : null,
      })
    }
    const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setDataToSend({
          ...dataToSend,
          image: e.target.files[0],
        })
      }
    }

    const sendNewData = async () => {
      const api = configureAxios();
      const headers = { 'Content-Type': 'multipart/form-data' }

      try {
        const res = await api.put('/profile', dataToSend, { headers })
        console.log(res);
        alert('Cambios guardados correctamente');
        getUserData();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // eslint-disable-next-line no-unsafe-optional-chaining
          const { message, name } = error.response?.data;

          if (error.status === 415 && message === "Unsupported type media") {
            alert('El archivo debe ser una imagen jpeg, png o gif');
          }
          else if (name === "MulterError") {
            alert(ERROR_RESPONSE[message as ResponseErrorMessage] || message);
          }
          else {
            console.log(error.response);
            alert('Error al subit la image');
          }
        }
      }
    }

    useEffect(() => {
      getUserData()
    }, [])

    useEffect(() => {
      setDataToSend((prev) => ({
        ...prev,
        description: form.description
      }))
    }, [form])



    return (
        <div className="w-auto grow py-1 px-8 bg-[#FFFCF9]">
            <div className="w-full max-h-48a flex justify-center items-center align-middle py-4 flex-col gap-4">
                <img src={form.img || defaultUserImage} className="max-h-44 w-[100px] h-[100px] rounded-full object-cover border-[1px] border-primary"/>
                <form action="" onSubmit={(e) => e.preventDefault()} method="" encType="multipart/form-data" className="flex gap-4">
                    <input type="file" id="image" className="hidden" onChange={fileChange}/>
                    <label htmlFor="image" className="bg-primary text-white px-8 py-2 rounded-md hover:cursor-pointer hover:bg-primary70">
                        Subir imagen
                    </label>
                </form>
            </div>
            
            <div className="w-full grid grid-cols-7 gap-8 justify-between pb-8">
                <article className="bg-white rounded-3xl col-span-4 mt-3 p-8 shadow-custom flex flex-col gap-7">
                    <Input
                        name="username"
                        value={form.user.username}
                        label="Nombre de usuario"
                        onChange={() => {}}
                        disabled={true}
                    />
                    <Input
                        type="email"
                        name="email"
                        value={form.user.email}
                        label="Nombre de usuario"
                        onChange={() => {}}
                        disabled={true}
                    />
                    <TextArea
                        name="description"
                        placeholder="Descripción"
                        label="Descripción"
                        value={dataToSend.description || ""}
                        onChange={handleChange}
                        rows={5}
                    />
                    <div className="px-10 flex flex-col gap-4">
                        {areChanges && (
                            <p className="text-primary70 text-center">Tienes cambios sin guardar</p>
                        )}
                        <Button type="filled" className="bg-primary" onClick={() => sendNewData()} disabled={!areChanges}>Editar</Button>
                    </div>
                </article>
                <article className="bg-white rounded-3xl flex-grow text-center col-span-3 mt-3 p-8 h-max min-h-[445px] shadow-custom">
                    <div className=" block content-center h-1/6 font-semibold text-2xl text-" >
                        Subí de plan
                    </div>
                    <div className=" block text-base h-3/4 content-start font-normal text-colortextosubtitulos" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, 
                        non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus 
                        feugiat nulla. Vivamus elementum viverra sapien et hendrerit. Nunc vitae vulputate ante. Donec a interdum justo. 
                        Nam sed lectus posuere, egestas mi sed, luctus sapien.
                    </div>
                    <div className="w-full text-center content-end h-20 flex flex-col py-5">
                        <Button type="bordered" className="border-primary70 !text-primary" onClick={() => {}}>
                          Ver planes
                        </Button>
                    </div>
                </article>
            </div>
        </div>
    )
}
