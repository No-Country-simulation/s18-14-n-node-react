import { Category } from "@/types"

export const categoriesList: Category[] = [
  {
    name: "Vegetariana", id: "1",
    image: 'size-[125px] rounded-full bg-vegetarian bg-cover'
  },
  {
    name: "Vegana", id: "2",
    image: 'size-[125px] rounded-full bg-vegan bg-cover'
  },
  {
    name: "Sin Gluten", id: "3",
    image: 'size-[125px] rounded-full bg-glutenfree bg-cover'
  },
  {
    name: "Paleo", id: "4",
    image: 'size-[125px] rounded-full bg-paleo bg-cover'
  },
  {
    name: "Cetogénica (Keto)", id: "5",
    image: 'size-[125px] rounded-full bg-cetogenica bg-cover'
  },
  {
    name: "Mediterránea", id: "6",
    image: 'size-[125px] rounded-full bg-mediterranean bg-cover'
  },
  {
    name: "Raw", id: "7",
    image: 'size-[125px] rounded-full bg-raw bg-cover'
  }
]

export const recipesList = [
  {
    id: "1",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-4.png',
    categories: 1
  },
  {
    id: "2",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-3.png',
    categoryId: 1
  },
  {
    id: "3",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-2.png',
    categoryId: 1
  },
  {
    id: "4",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-1.png',
    categoryId: 1
  },
  {
    id: "5",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-1.png',
    categoryId: 1
  },
  {
    id: "6",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-2.png',
    categoryId: 1
  },
  {
    id: "7",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-4.png',
    categoryId: 1
  },
  {
    id: "8",
    title: "Receta",
    description: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
    image: '/assets/favorite-3.png',
    categoryId: 1
  },
]

export const recipes = [

  {
    title: "Sopa De Lentejas Rojas Con Pollo Y Nabos",
    description: "La sopa de lentejas rojas con pollo y nabos puede ser una buena receta para ampliar su repertorio de platos principales. Esta receta sirve para 8 personas. Una porción contiene 477 calorías, 27 g de proteína y 20 g de grasa. Se puede disfrutar en cualquier época, pero es especialmente bueno para el otoño. Desde la preparación hasta el plato, esta receta tarda 55 minutos aproximadamente. Dirígete a la tienda y compra sal y pimienta, tomates enlatados, perejil de hoja plana y algunas cosas más para prepararlo hoy. ",
    image: "https://img.spoonacular.com/recipes/715415-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free"
    ],
    spoonacularSourceUrl: "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415",
    ingredients: [
      {
        name: "palta",
        img: "https://spoonacular.com/cdn/ingredients_100x100/avocado.jpg",
        description: "Ingrediente adicional cortado en cubitos"
      },
      {
        name: "zanahoria",
        img: "https://img.spoonacular.com/ingredients_100x100/sliced-carrot.png",
        description: "3 zanahorias medianas picadas"
      },
      {
        name: "apio",
        img: "https://img.spoonacular.com/ingredients_100x100/celery.jpg",
        description: "3 tallos de apio cortados en cubitos"
      },
      {
        name: "pechuga de pollo",
        img: "https://img.spoonacular.com/ingredients_100x100/cooked-chicken-breast.png",
        description: "2 bifes de pechuga de pollo desmenuzada"
      },
      {
        name: "perejil",
        img: "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg",
        description: "1/2 taza de perejil"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
        description: "6 dientes de ajo"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "2 cucharadas de aceite de oliva"
      },
      {
        name: "tomates enlatados",
        img: "https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.png",
        description: "800g de tomates enlatados"
      },
      {
        name: "lentejas rojas",
        img: "https://spoonacular.com/cdn/ingredients_100x100/red-lentils.png",
        description: "2 tazas de lentejas rojas secas"
      },
      {
        name: "sal y pimienta negra",
        img: "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg",
        description: "sal y pimienta negra a gusto"
      },
      {
        name: "nabo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/turnips.png",
        description: "1 nabo grande cortado en cubitos"
      },
      {
        name: "caldo de verduras",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png",
        description: "8 tazas de caldo de verduras"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1 cebolla mediana picada"
      }
    ]
  },
  {
    title: "Sopa de espárragos y arvejas",
    description: "Sopa de espárragos y guisantes: verdadera comida preparada requiere aproximadamente 20 minutos de principio a fin. ¿Cuidando tu figura? Esta receta paleolítica, sin gluten, sin lácteos y vegetarianaa tiene 217 calorías, 11 g de proteína y 8 g de grasa por porción. Esta receta es para 2 personas. Esta receta cubre el 25% de tus requerimientos diarios de vitaminas y minerales. El otoño será aún más especial con esta receta. Funciona bien como entremés. Una mezcla de caldo de verduras, aove, ajo y un puñado de otros ingredientes es todo lo que se necesita para que esta receta sea tan deliciosa. ",
    image: "https://img.spoonacular.com/recipes/716406-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "paleo",
      "vegetariana",
      "primal",
      "vegana"
    ],
    spoonacularSourceUrl: "https://spoonacular.com/asparagus-and-pea-soup-real-convenience-food-716406",
    ingredients: [
      {
        name: "espárragos",
        img: "https://spoonacular.com/cdn/ingredients_100x100/asparagus.png",
        description: "1 bolsa de espárragos congelados"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "1 cucharada de aceite de oliva"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
        description: "2 dientes de ajo"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1/2 cebolla"
      },
      {
        name: "arvejas",
        img: "https://spoonacular.com/cdn/ingredients_100x100/peas.jpg",
        description: "2 tazas de arvejas congelados"
      },
      {
        name: "caldo de verduras",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png",
        description: "1 caja de caldo de verduras bajo en sodio"
      }
    ]
  },
  {
    title: "Col rizada con ajo",
    description: "Garlicky Kale requiere aproximadamente 45 minutos de principio a fin. Esta guarnición tiene 170 calorías, 2 g de proteína y 15 g de grasa por porción. Esta receta sirve para 2 personas. Por 69 centavos por porción, esta receta cubre el 17% de tus requerimientos diarios de vitaminas y minerales. Esta receta de Foodista requiere vinagre balsámico, ajo, col rizada y aceite de oliva. ",
    image: "https://img.spoonacular.com/recipes/644387-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "paleo",
      "vegetariana",
      "primal",
      "whole 30",
      "vegana"
    ],
    spoonacularSourceUrl: "https://spoonacular.com/garlicky-kale-644387",
    ingredients: [
      {
        name: "vinagre balsámico",
        img: "https://spoonacular.com/cdn/ingredients_100x100/balsamic-vinegar.jpg",
        description: "3 cucharadas de vinagre balsámico"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
        description: "1 dientes de ajo"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "aceite de oliva a gusto"
      },
      {
        name: "col rizada",
        img: "https://spoonacular.com/cdn/ingredients_100x100/kale.jpg",
        description: "1 manojo de col rizada"
      }
    ]
  },
  {
    title: "Estofado de carne en olla de cocción lenta",
    description: "Si desea agregar más recetas sin gluten y sin lácteos a su caja de recetas, el estofado de carne en olla de cocción lenta podría ser una receta que debería probar. Una porción contiene 434 calorías, 44 g de proteína y 12 g de grasa. Esta receta sirve para 6 personas. Esta receta cubre el 45% de tus requerimientos diarios de vitaminas y minerales. Funciona mejor como plato principal y se hace en aproximadamente 8 horas y 10 minutos. Si tienes cebollas verdes, zanahorias, apio y algunos otros ingredientes a mano, puedes prepararlo.",
    image: "https://img.spoonacular.com/recipes/715446-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free"
    ],
    spoonacularSourceUrl: "https://spoonacular.com/slow-cooker-beef-stew-715446",
    ingredients: [
      {
        name: "caldo de carne",
        img: "https://spoonacular.com/cdn/ingredients_100x100/beef-broth.png",
        description: "400g de caldo de carne"
      },
      {
        name: "zanahoria",
        img: "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png",
        description: "2 zanahorias grandes"
      },
      {
        name: "apio",
        img: "https://spoonacular.com/cdn/ingredients_100x100/celery.jpg",
        description: "2 tallos de apio"
      },
      {
        name: "champiñones",
        img: "https://spoonacular.com/cdn/ingredients_100x100/cream-of-mushroom-soup.png",
        description: "750g de crema de champiñones"
      },
      {
        name: "cebolla verde",
        img: "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg",
        description: "4 cebollas verdes"
      },
      {
        name: "batata",
        img: "https://spoonacular.com/cdn/ingredients_100x100/new-potatoes.jpg",
        description: "10 batatas nuevas"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1 cebolla pequeña"
      },
      {
        name: "dale",
        img: "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png",
        description: "1/2 taza de condimento de dale"
      },
      {
        name: "carne",
        img: "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png",
        description: "900 gramos de carne guisada"
      },
      {
        name: "agua",
        img: "https://spoonacular.com/cdn/ingredients_100x100/water.png",
        description: "2 tazas de agua"
      }
    ]
  },
  {
    title: "Jambalaya de frijol rojo",
    description: "Jambalayan de frijoles rojos es un plato principal para 6 personas. Una porción de este plato contiene aproximadamente 18 g de proteína, 6 g de grasa y un total de 393 calorías. Esta receta cubre el 33% de tus requerimientos diarios de vitaminas y minerales. Una mezcla de caldo de verduras, tomates, cebolla y un puñado de otros ingredientes es todo lo que se necesita para que esta receta sea tan sabrosa. Esta receta es típica de la cocina cajún. Desde la preparación hasta el plato, esta receta tarda aproximadamente 45 minutos. ",
    image: "https://img.spoonacular.com/recipes/782601-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "vegetariana",
      "egana"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601",
    ingredients: [
      {
        name: "arroz integral seco cocido",
        img: "https://spoonacular.com/cdn/ingredients_100x100/rice-brown-cooked.png",
        description: "2 tazas arroz integral seco cocido"
      },
      {
        name: "zanahorias",
        img: "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png",
        description: "2 zanahorias medianas"
      },
      {
        name: "apio",
        img: "https://img.spoonacular.com/ingredients_100x100/celery.jpg",
        description: "2 tallos de apio"
      },
      {
        name: "semilla de apio",
        img: "https://spoonacular.com/cdn/ingredients_100x100/celery-seed.jpg",
        description: "1 cucharadita de semilla de apio"
      },
      {
        name: "frijoles",
        img: "https://spoonacular.com/cdn/ingredients_100x100/kidney-beans.jpg",
        description: "2 tazas de frijoles secos cocidos"
      },
      {
        name: "mejorana",
        img: "https://spoonacular.com/cdn/ingredients_100x100/marjoram.jpg",
        description: "1 cucharadita de mejorana seca"
      },
      {
        name: "tomillo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/thyme.jpg",
        description: "2 cucharaditas de tomillo seco"
      },
      {
        name: "berenjena",
        img: "https://spoonacular.com/cdn/ingredients_100x100/eggplant.png",
        description: "1 beremjena mediana"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
        description: "2 dientes de ajo"
      },
      {
        name: "chauchas",
        img: "https://spoonacular.com/cdn/ingredients_100x100/green-beans-or-string-beans.jpg",
        description: "3 manojos de chauchas"
      },
      {
        name: "pimienta negra",
        img: "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
        description: "pimienta negra recién molida a gusto"
      },
      {
        name: "salvia",
        img: "https://spoonacular.com/cdn/ingredients_100x100/dried-sage.png",
        description: "2 cucharaditas de salvia molida"
      },
      {
        name: "humo líquido",
        img: "https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg",
        description: "1/2 cucharadita de humo líquido"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "2 cucharaditas de aceite de oliva"
      },
      {
        name: "pimiento rojo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/red-pepper.jpg",
        description: "1 pimiento rojo"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1 pequeña cebolla blanca picada"
      },
      {
        name: "sal marina",
        img: "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
        description: "1 y 1/2 cucharaditas de sal marina"
      },
      {
        name: "salsa picante",
        img: "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png",
        description: "1 cucharadita de salsa picante"
      },
      {
        name: "tomate",
        img: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
        description: "2 tomates medianos picados"
      },
      {
        name: "caldo de verdura",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png",
        description: "3 tazas de caldo de verdura"
      }
    ]
  },
  {
    title: "Coliflor, arroz integral y arroz frito con verduras",
    description: "La receta de arroz frito con coliflor, arroz integral y verduras está lista en unos 30 minutos y definitivamente es una excelente opción sin gluten, sin lácteos, lacto ovo vegetariana y vegana para los amantes de la comida china. Esta receta rinde 8 porciones con 248 calorías, 7 g de proteína y 13 g de grasa cada una. Esta receta cubre el 19% de tus requerimientos diarios de vitaminas y minerales. Funciona bien como entremés. Dirígete a la tienda y compra brócoli, aceite de semilla de uva, semillas de sésamo y algunas otras cosas para prepararlo hoy. ",
    image: "https://img.spoonacular.com/recipes/716426-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "vegetariana",
      "vegana"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426",
    ingredients: [
      {
        name: "brócoli",
        img: "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg",
        description: "2 tazas de brócoli cocido"
      },
      {
        name: "coliflor",
        img: "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg",
        description: "1 cabeza de coliflor cruda"
      },
      {
        name: "aceite de coco",
        img: "https://spoonacular.com/cdn/ingredients_100x100/oil-coconut.jpg",
        description: "1 cucharada de aceite de coco"
      },
      {
        name: "arroz integral",
        img: "https://spoonacular.com/cdn/ingredients_100x100/rice-brown-cooked.png",
        description: "3 tazas de arroz integral cocido"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
        description: "5 dientes de ajo"
      },
      {
        name: "aceite de semilla de uva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg",
        description: "1 cucharadita de aceite de semilla de uva"
      }, {
        name: "salsa de soja",
        img: "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg",
        description: "3 cucharadas de salsa de soja baja en sodio"
      },
      {
        name: "arvejas",
        img: "https://spoonacular.com/cdn/ingredients_100x100/peas.jpg",
        description: "1 taza de arvejas"
      },
      {
        name: "sal",
        img: "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
        description: "Sal a gusto"
      }, {
        name: "cebolla de verdeo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg",
        description: "7 cebollas de verdeo"
      },
      {
        name: "aceite de sésamo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/sesame-oil.png",
        description: "⅝ cucharaditas de aceite de sésamo"
      },
      {
        name: "sésamo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/sesame-seeds.png",
        description: "Algunas semillas de sésamo"
      }
    ]
  },
  {
    title: "Ensalada de quinoa y garbanzos con tomates secos y cerezas secas",
    description: "¿Necesita una guarnición vegetariana, sin gluten y sin lácteos? La ensalada de quinua y garbanzos con tomates secados al sol y cerezas secas podría ser una receta increíble para probar. Esta receta sirve para 6 personas y cuesta $1,87 por porción. Una porción contiene 539 calorías, 21 g de proteína y 15 g de grasa. Dirígete a la tienda y compra miel, jugo de naranja, garbanzos y algunas cosas más para prepararlo hoy. Desde la preparación hasta el plato, esta receta tarda unos 45 minutos. ",
    image: "https://img.spoonacular.com/recipes/716004-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "vegetariana"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/quinoa-and-chickpea-salad-with-sun-dried-tomatoes-and-dried-cherries-716004",
    ingredients: [
      {
        name: "anacardos",
        img: "https://img.spoonacular.com/ingredients_100x100/cashews.jpg",
        description: "⅓ taza de anacardos enteros crudos"
      },
      {
        name: "cerezas secas",
        img: "https://img.spoonacular.com/ingredients_100x100/cherries-dried.jpg",
        description: "⅓ taza de cerezas secas"
      },
      {
        name: "garbanzos",
        img: "https://img.spoonacular.com/ingredients_100x100/chickpeas.png",
        description: "1 y ½ taza de garbanzos secos cocidos"
      },
      {
        name: "tomillo",
        img: "https://img.spoonacular.com/ingredients_100x100/thyme.jpg",
        description: "1/2 cucharadita de tomillo seco"
      },
      {
        name: "comino",
        img: "https://img.spoonacular.com/ingredients_100x100/ground-cumin.jpg",
        description: "1/2 cucharadita de comino molido"
      },
      {
        name: "miel",
        img: "https://img.spoonacular.com/ingredients_100x100/honey.png",
        description: "1 y ½ cucharadita de miel"
      },
      {
        name: "naranja",
        img: "https://img.spoonacular.com/ingredients_100x100/orange-juice.jpg",
        description: "jugo de 1 naranja"
      },
      {
        name: "aceite de oliva",
        img: "https://img.spoonacular.com/ingredients_100x100/olive-oil.jpg",
        description: "2 cucharadas de aceite de oliva"
      },
      {
        name: "quinoa",
        img: "https://img.spoonacular.com/ingredients_100x100/uncooked-quinoa.png",
        description: "2 tazas de quinoa seca cocida"
      },
      {
        name: "vinagre de vino",
        img: "https://img.spoonacular.com/ingredients_100x100/red-wine-vinegar.jpg",
        description: "2 cucharaditas de vinagre de vino tinto"
      },
      {
        name: "sal marina",
        img: "https://img.spoonacular.com/ingredients_100x100/salt.jpg",
        description: "Sal marina fresca negra a gusto"
      },
      {
        name: "tomate disecado",
        img: "https://img.spoonacular.com/ingredients_100x100/sundried-tomatoes.jpg",
        description: "1/2 taza de tomates disecados"
      },
      {
        name: "cùrcuma",
        img: "https://img.spoonacular.com/ingredients_100x100/turmeric.jpg",
        description: "1/2 cucharadita de cùrcuma"
      }
    ]
  },
  
  {
    title: "Arroz y frijoles caseros fáciles",
    description: "Arroz y frijoles caseros fáciles es un plato principal para 2 porciones. Una porción contiene 446 calorías, 19 g de proteína y 4 g de grasa. Esta receta cubre el 26% de tus requerimientos diarios de vitaminas y minerales. Una mezcla opcional de salsa picante, tomates enlatados, agua y un puñado de otros ingredientes es todo lo que se necesita para que esta receta sea tan deliciosa. Esta receta de cooking2perfection.blogspot.com tiene 471 seguidores. Desde la preparación hasta el plato, esta receta tarda alrededor de 35 minutos. ",
    image: "https://img.spoonacular.com/recipes/716627-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "vegetariana",
      "vegana"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/easy-homemade-rice-and-beans-716627",
    ingredients: [
      {
        name: "frijoles negros",
        img: "https://spoonacular.com/cdn/ingredients_100x100/black-beans.jpg",
        description: "450g frijoles negros enlatados"
      },
      {
        name: "tomates enlatados",
        img: "https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.png",
        description: "300g de tomates enlatados cortados en cubitos"
      },
      {
        name: "chile en polvo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
        description: "2 cucharaditas de chile en polvo"
      },
      {
        name: "comino",
        img: "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg",
        description: "1/2 cucharadita de comino molido"
      },
      {
        name: "pimienta negra",
        img: "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
        description: "1/4kg de pimienta negra molida"
      },
      {
        name: "salsa picante",
        img: "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png",
        description: "4 chorritos de salsa picante"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "1 cucharadita de aceite de oliva"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1/4 taza de cebolla"
      },
      {
        name: "arroz",
        img: "https://spoonacular.com/cdn/ingredients_100x100/uncooked-white-rice.png",
        description: "1/2 taza de arroz"
      },
      {
        name: "agua",
        img: "https://spoonacular.com/cdn/ingredients_100x100/water.png",
        description: "3 cucharadas de agua"
      }
    ]
  },
  {
    title: "Sopa toscana de frijoles blancos con aceite de oliva y romero",
    description: "La sopa toscana de frijoles blancos con aceite de oliva y romero es una receta sin gluten, sin lácteos, lacto ovo vegetariana y vegana con 6 porciones. Este plato principal tiene 242 calorías, 16 g de proteína y 1 g de grasa por ración. Por 50 centavos por porción, esta receta cubre el 19% de tus necesidades diarias de vitaminas y minerales. Será un éxito en tu evento de otoño. Dirígete a la tienda y compra aceite de oliva, romero, ajo y algunas cosas más para prepararlo hoy. Desde la preparación hasta el plato, esta receta tarda aproximadamente 45 minutos. ",
    image: "https://img.spoonacular.com/recipes/664147-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "vegetariana",
      "vegana"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/tuscan-white-bean-soup-with-olive-oil-and-rosemary-664147",
    ingredients: [
      {
        name: "laurel",
        img: "https://spoonacular.com/cdn/ingredients_100x100/bay-leaves.jpg",
        description: "1 hoja de laurel"
      },
      {
        name: "romero",
        img: "https://spoonacular.com/cdn/ingredients_100x100/rosemary.jpg",
        description: "1 cucharada de romero fresco"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
        description: "6 dientes de ajo"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "1 cucharadita de aceite de oliva"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1 cebolla mediana"
      },
      {
        name: "sal",
        img: "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
        description: "un poco de sal"
      },
      {
        name: "agua",
        img: "https://spoonacular.com/cdn/ingredients_100x100/water.png",
        description: "2 cucharadas de agua"
      },
      {
        name: "frijoles blancos",
        img: "https://spoonacular.com/cdn/ingredients_100x100/white-beans.jpg",
        description: "2 tazas de frijoles blancos secos"
      }
    ]
  },
  {
    title: "Guarnición crujiente de coles de Bruselas",
    description: "La receta de guarnición crujiente de coles de Bruselas se puede preparar en unos 30 minutos. Obtienes una guarnición para 4 porciones. Una porción contiene 232 calorías, 8 g de proteína y 16 g de grasa. Una mezcla de vinagre de vino tinto, nueces, mostaza dijon y un puñado de otros ingredientes es todo lo que se necesita para que esta receta sea tan deliciosa. ",
    image: "https://img.spoonacular.com/recipes/640941-312x231.jpg",
    categories: [
      "sin gluten",
      "dairy free",
      "Paleo",
      "Vegetariana",
      "primal"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/crunchy-brussels-sprouts-side-dish-640941",
    ingredients: [
      {
        name: "pimienta negra",
        img: "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
        description: "¼ cucharaditas de pimienta negra"
      },
      {
        name: "coles de Bruselas",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brussels-sprouts.jpg",
        description: "50g de coles de Bruselas recortadas"
      },
      {
        name: "mostaza",
        img: "https://spoonacular.com/cdn/ingredients_100x100/dijon-mustard.jpg",
        description: "1 cucharadita de mostaza dijon"
      },
      {
        name: "miel",
        img: "https://spoonacular.com/cdn/ingredients_100x100/honey.png",
        description: "½ cucharaditas de miel"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        description: "3 cucharadas de aceite de oliva"
      },
      {
        name: "vinagre de vino",
        img: "https://spoonacular.com/cdn/ingredients_100x100/red-wine-vinegar.jpg",
        description: "2 cucharadas de vinagre de vino tinto"
      },
      {
        name: "nueces",
        img: "https://spoonacular.com/cdn/ingredients_100x100/walnuts.jpg",
        description: "¼ taza de nueces"
      }
    ]
  },
  
  {
    title: "Olla de cocción lenta: cerdo y garbanzos",
    description: "Olla de cocción lenta: cerdo y garbanzos tarda aproximadamente 45 minutos de principio a fin. Esta receta es para 6 personas. Este plato principal tiene 587 calorías, 66 g de proteína y 14 g de grasa por porción. Esta receta cubre el 45% de tus requerimientos diarios de vitaminas y minerales. Dirígete a la tienda y compra agua *2, comino, carne de cerdo asada y algunas otras cosas para prepararla hoy. ",
    image: "https://img.spoonacular.com/recipes/660306-312x231.jpg",
    categories: [
      "Sin Gluten",
      "dairy free"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-pork-and-garbanzo-beans-660306",
    ingredients: [
      {
        name: "canela",
        img: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
        description: "2 cucharadas de canela"
      },
      {
        name: "comino",
        img: "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg",
        description: "1 cucharada de comino seco"
      },
      {
        name: "garbanzos",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chickpeas.png",
        description: "450g de garbanzos secos "
      },
      {
        name: "pimienta negra",
        img: "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
        description: "2 cucharaditas de pimienta negra molida"
      },
      {
        name: "cebolla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1 cebolla pequeña"
      },
      {
        name: "cerdo asado",
        img: "https://spoonacular.com/cdn/ingredients_100x100/pork-loin.jpg",
        description: "1,3 kg de cerdo asado con hueso"
      },
      {
        name: "sal",
        img: "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
        description: "2 cucharaditas de sal"
      },
      {
        name: "agua",
        img: "https://spoonacular.com/cdn/ingredients_100x100/water.png",
        description: "4 tazas de agua"
      }
    ]
  },
  
  {
    title: "Potente batido de superalimento Matcha y almendras",
    description: "Powerhouse Almond Matcha Superfood Smoothie es un desayuno para 2 porciones. Una porción contiene 289 calorías, 11 g de proteína y 13 g de grasa. Esta receta cubre el 27% de tus requerimientos diarios de vitaminas y minerales. Si tienes semillas de chía, té matcha en polvo, plátano y algunos otros ingredientes a mano, puedes prepararlo. Esta receta de Foodista tiene 80 fans. Desde la preparación hasta el plato, esta receta tarda alrededor de 10 minutos. ",
    image: "https://img.spoonacular.com/recipes/756814-312x231.jpg",
    categories: [
      "Sin Gluten",
      "dairy free"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/powerhouse-almond-matcha-superfood-smoothie-756814",
    ingredients: [
      {
        name: "mantequilla de almendras",
        img: "https://spoonacular.com/cdn/ingredients_100x100/nut-butter.png",
        description: "2 cucharadas de mantequilla de almendras natural sin sal"
      },
      {
        name: "leche de almendras",
        img: "https://spoonacular.com/cdn/ingredients_100x100/almond-butter.jpg",
        description: "1½ tazas de leche de almendras sin azúcar"
      },
      {
        name: "banana",
        img: "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
        description: "1 banano mediano congelado"
      },
      {
        name: "chía",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chia-seeds.jpg",
        description: "2 cucharaditas de semillas de chía"
      },
      {
        name: "col",
        img: "https://spoonacular.com/cdn/ingredients_100x100/kale.jpg",
        description: "1 taza de col rizada"
      },
      {
        name: "mango",
        img: "https://spoonacular.com/cdn/ingredients_100x100/mango.jpg",
        description: "½ taza de trozos de mango congelados"
      },
      {
        name: "matcha",
        img: "https://spoonacular.com/cdn/ingredients_100x100/matcha-powder.jpg",
        description: "1 cucharada de té verde matcha en polvo"
      },
      {
        name: "piña",
        img: "https://spoonacular.com/cdn/ingredients_100x100/pineapple.jpg",
        description: "¾ taza de piña congelada"
      },
      {
        name: "esencia de vainilla",
        img: "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg",
        description: "½ cucharaditas de extracto de vainilla"
      }
    ]
  },
  {
    title: "Broccolini Quinua Pilaf",
    description: "Broccolini Quinoa Pilaf requiere aproximadamente 30 minutos de principio a fin. Obtienes un plato principal para 2 personas. Una porción de este plato contiene alrededor de 20 g de proteína, 31 g de grasa y un total de 625 calorías. Dirígete a la tienda y compra caldo de verduras, cebolla, aceite de oliva y algunas cosas más para prepararlo hoy. Es una receta bastante cara para los amantes de la comida mediterránea. ",
    image: "https://img.spoonacular.com/recipes/715769-312x231.jpg",
    categories: [
      "Sin Gluten",
      "dairy free",
      "Vegetariana",
      "Vegana"
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/broccolini-quinoa-pilaf-715769",
    ingredients: [
      {
        name: "brócoli",
        img: "https://spoonacular.com/cdn/ingredients_100x100/broccolini.jpg",
        description: "1 manojo de brócoli recortado"
      },
      {
        name: "ajo",
        img: "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg",
        description: "1 diente de ajo"
      },
      {
        name: "aceite de oliva",
        img: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
        description: "1 cucharada de aceite de oliva"
      },
      {
        name: "quinua",
        img: "https://spoonacular.com/cdn/ingredients_100x100/uncooked-quinoa.png",
        description: "1 taza de quinua"
      },
      {
        name: "caldo de verduras",
        img: "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png",
        description: "2 tazas de caldo de verduras"
      },
      {
        name: "nueces",
        img: "https://spoonacular.com/cdn/ingredients_100x100/walnuts.jpg",
        description: "2 onzas de nueces"
      }
    ]
  },
]
