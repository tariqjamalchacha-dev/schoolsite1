import Image from "next/image";
import type { Metadata } from 'next';
import staffMembers from "@/data/staff.json";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Faculty | APSIS Hyd',
};

export default function StaffPage() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Faculty</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Meet the dedicated teachers and staff of our school.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staffMembers.map((staff) => {
          const staffImage = getImage(staff.imageId);
          const isLocal = staffImage?.imageUrl.startsWith('/');
          return (
            <Card key={staff.id} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-0">
                {staffImage && (
                  <div className="aspect-square relative w-full">
                    <Image
                      src={staffImage.imageUrl}
                      alt={`Portrait of ${staff.name}`}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={staffImage.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                )}
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{staff.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{staff.role}</p>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
