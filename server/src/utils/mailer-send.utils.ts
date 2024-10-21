import * as fs from 'node:fs'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'
import Handlebars from 'handlebars'
import { envs } from '../config'

const mailerSend = new MailerSend({
  apiKey: envs.mailerSendApiKey as string,
})

const sentFrom = new Sender('info@trial-k68zxl2yxzk4j905.mlsender.net', 'Recetapp')

export default class MailerSendUtils {
  private static compileTemplate(templatePath: string, variables: object) {
    const templateSource = fs.readFileSync(templatePath, 'utf-8')
    const template = Handlebars.compile(templateSource)
    return template(variables)
  }

  static async welcomeMail(email: string, templatePath: string, variables: object) {
    const recipients = [new Recipient(email)]
    const compileHtml = this.compileTemplate(templatePath, variables)

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject('🎉 Bienvenido a Recetapp!')
      .setHtml(compileHtml)
      .setText('Te damos la bienvenida')

    await mailerSend.email.send(emailParams)
  }

  static async resetPasswordMail(email: string, templatePath: string, variables: object) {
    const recipients = [new Recipient(email)]
    const compileHtml = this.compileTemplate(templatePath, variables)

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject('💻 Recuperar contraseña')
      .setHtml(compileHtml)
      .setText('Vamos a recuperar tu contraseña')

    await mailerSend.email.send(emailParams)
  }
}
