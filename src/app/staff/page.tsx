import Image from "next/image";
import type { Metadata } from 'next';
import staffMembers from "@/data/staff.json";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: 'Faculty | APSIS Hyd',
};

export default function StaffPage() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  const principal = staffMembers.filter(m => m.role === 'School Principal');
  const sectionHeads = staffMembers.filter(m => m.role.includes('Head') || m.role.includes('Director') || m.role.includes('Vice Principal'));
  const teachers = staffMembers.filter(m => !principal.includes(m) && !sectionHeads.includes(m));

  const StaffCard = ({ staff }: { staff: typeof staffMembers[0] }) => {
    const staffImage = getImage(staff.imageId);
    return (
      <Card key={staff.id} className="hover:shadow-lg transition-shadow text-center">
        <CardContent className="p-6">
          {staffImage && (
            <div className="w-32 h-32 relative mx-auto mb-4">
              <Image
                src={staffImage.imageUrl}
                alt={`Portrait of ${staff.name}`}
                fill
                className="object-cover rounded-full"
                data-ai-hint={staffImage.imageHint}
                sizes="128px"
              />
            </div>
          )}
        </CardContent>
        <CardHeader className="p-4 pt-0">
          <CardTitle className="text-xl">{staff.name}</CardTitle>
          <p className="text-muted-foreground font-medium text-foreground/80">{staff.role}</p>
        </CardHeader>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Faculty</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Meet the dedicated teachers and staff of our school.
        </p>
      </header>

      <div className="space-y-12">
        {/* Principal Row */}
        <section>
          <div className="flex justify-center">
            {principal.map((staff) => (
              <StaffCard staff={staff} key={staff.id} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Section Heads Row */}
        <section>
           <h2 className="text-2xl font-bold font-headline mb-6 text-center">Section Heads</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {sectionHeads.map((staff) => (
              <StaffCard staff={staff} key={staff.id} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Teachers Row */}
        <section>
          <h2 className="text-2xl font-bold font-headline mb-6 text-center">Teachers & Counselors</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.map((staff) => (
              <StaffCard staff={staff} key={staff.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
