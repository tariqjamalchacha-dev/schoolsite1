
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import galleryItems from '@/data/gallery.json';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Event Gallery | APSIS Hyd',
};

export default function GalleryPage() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Event Gallery</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A glimpse into life at our school.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => {
          const galleryImage = getImage(item.imageId);
          return (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {galleryImage && (
                  <div className="aspect-video relative">
                    <Image
                      src={galleryImage.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={galleryImage.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-4 flex flex-col items-start w-full">
                <div className="w-full">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="w-full mt-2 flex justify-end">
                    <Link href={item.facebookPostUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-bold hover:underline">
                    more...
                    </Link>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
