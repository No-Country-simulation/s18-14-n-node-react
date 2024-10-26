import * as fs from 'node:fs'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'
import Handlebars from 'handlebars'

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string,
})

const sentFrom = new Sender(`info@${process.env.MAILERSEND_DOMAIN}`, 'Recetapp')

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

    return await mailerSend.email.send(emailParams)
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

    return await mailerSend.email.send(emailParams)
  }
}
