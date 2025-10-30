import Image from "next/image";
import type { Metadata } from 'next';
import { staffMembers } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: 'Faculty | APSIS Hyd',
};

export default function StaffPage() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Faculty Directory</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Meet the dedicated teachers and staff of our school.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffMembers.map((staff) => {
          const staffImage = getImage(staff.imageId);
          const isLocal = staffImage?.imageUrl.startsWith('/');
          return (
            <Card key={staff.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-20 w-20">
                  {staffImage && isLocal && (
                     <Image 
                      src={staffImage.imageUrl} 
                      alt={`Portrait of ${staff.name}`} 
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  )}
                  {staffImage && !isLocal &&(
                    <AvatarImage 
                      src={staffImage.imageUrl} 
                      alt={`Portrait of ${staff.name}`} 
                      data-ai-hint={staffImage.imageHint}
                    />
                  )}
                  <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{staff.name}</CardTitle>
                  <p className="text-accent">{staff.role}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <a href={`mailto:${staff.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{staff.email}</span>
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{staff.phone}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
