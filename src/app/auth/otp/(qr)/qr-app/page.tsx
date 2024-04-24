'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function QrPage() {
  const router = useRouter()

  const goToQrcode = () => {
    router.replace('/auth/otp/qr-code')
  }
  return (
    <div className="flex w-full justify-center items-center bg-white rounded-[8px]">
      <div className="relative flex items-center w-3/6 sm:w-2/5">
        <div className="w-full z-10">
          <div className="text-center">
            <div className="font-semibold text-3xl">
              <p>Codigo QR image</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400 justify-center my-5">
              <p>We have sent a code to your email ba@dipainhouse.com</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-lg">
                <Image
                  src={"/QR-image.png"}
                  width={300}
                  height={300}
                  alt="QR"
                />
              </div>
              <div className="flex w-full gap-3 justify-between">
                <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                  Cancelar
                </button>
                <button onClick={goToQrcode} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
