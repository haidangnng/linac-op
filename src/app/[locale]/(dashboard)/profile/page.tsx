import BasicInformation from "@/components/profile/basic-information";
import ContactInformation from "@/components/profile/contact-information";

// DOCTOR's Profile
export default function ProfilePage() {
  return (
    <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
      <BasicInformation />
      <div className="grid col-span-3 grid-rows-2">
        <ContactInformation />
      </div>
    </div>
  );
}