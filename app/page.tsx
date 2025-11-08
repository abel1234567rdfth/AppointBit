import PatientForm from "@/components/Forms/PatientForm";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import PasskeyModal from "@/components/ui/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

interface adminvalueprop {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home(params: adminvalueprop) {
  const searchParamsObj = params.searchParams ? await params.searchParams : {};
  const isadmin = searchParamsObj.admin === "true";

  console.log(isadmin);
  return (
    <div className="flex h-screen max-h-screen">
      {isadmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 ">
              © 2025 LukasPulse
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
