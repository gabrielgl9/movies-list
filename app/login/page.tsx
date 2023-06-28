import Button from '@/components/button'
import Textfield from '@/components/textfield'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <form className="flex flex-col items-center justify-center h-screen w-screen bg-purple-500">
      <div className="h-auto w-2/3 md:w-1/3 lg:w-1/4 bg-white border rounded-lg border-white p-8">
        <Textfield label="Login" type="text" extraClasses="pb-5 text-lg" />
        <Textfield label="Senha" type="password" extraClasses="pb-5 text-lg" />
        <Button
          type="submit"
          text="Entrar"
          extraClasses="bg-purple-400 rounded-lg border border-purple-400 text-white p-3 text-center mt-3"
        />
        <div></div>
        <div className="text-center text-base underline underline-offset-1 pt-3">
          <Link href="/forgot-password">REDEFINIR MINHA SENHA</Link>
        </div>

        <div className="border mt-6"></div>
        <div className="pt-3 text-center">
          <p className="text-2xl text-purple-500"> Ainda não tem conta? </p>
          <p className="text-sm pt-3"> Então cadastre-se agora! </p>
          <Button
            type="button"
            text="Cadastre-se"
            extraClasses="bg-purple-400 rounded-lg border border-purple-400 text-white p-3 text-center mt-3"
          />
        </div>
      </div>
    </form>
  )
}
