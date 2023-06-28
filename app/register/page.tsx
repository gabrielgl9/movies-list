import Button from '@/components/button'
import Textfield from '@/components/textfield'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <form className="flex flex-col items-center justify-center h-screen w-screen bg-purple-500">
      <div className="h-auto w-2/3 bg-white border rounded-lg border-white p-8">
        <Textfield label="LOGIN" type="text" extraClasses="pb-5 text-lg" />
        <Textfield label="SENHA" type="password" extraClasses="pb-5 text-lg" />
        <Button
          type="submit"
          text="Logar"
          extraClasses="bg-purple-400 rounded-lg border border-purple-400 text-white p-3 text-center mt-3"
        />
      </div>
    </form>
  )
}
