
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import galleryItems from '@/data/gallery.json';
import announcementItems from '@/data/announcements.json';
import Link from 'next/link';
import { ArrowRight, Newspaper, Megaphone } from 'lucide-react';
import { format } from 'date-fns';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  const sortedAnnouncements = [...announcementItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const sortedGalleryItems = [...galleryItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const heroImage = getImage('hero-building');

  return (
    <>
      <section className="relative h-96 w-full flex items-end justify-center pb-6">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-10 flex gap-32">
            <Button asChild size="lg">
                <Link href="/calendar">View Calendar</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
                <Link href="/about">Contact Us</Link>
            </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-3xl font-bold font-headline mb-6 flex items-center gap-3">
            <Megaphone className="w-8 h-8 text-accent" />
            Announcements
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sortedAnnouncements.map((item) => (
              <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative flex flex-col flex-grow p-6">
                  <CardHeader className="p-0 pr-24">
                    <CardTitle className="text-card-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4 flex-grow">
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                  <div className="absolute top-6 right-6 text-sm text-muted-foreground">
                    {format(new Date(item.date), 'MMMM d, yyyy')}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline mb-6 flex items-center gap-3">
            <Newspaper className="w-8 h-8 text-accent" />
            Events
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedGalleryItems.slice(0, 3).map((item) => {
              const galleryImage = getImage(item.imageId);
              return (
                <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {galleryImage && (
                    <div className="relative aspect-video">
                      <Image
                        src={galleryImage.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={galleryImage.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-grow">
                    <CardHeader className="p-6 pb-0">
                      <CardTitle className="text-card-foreground">{item.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{format(new Date(item.date), 'MMMM d, yyyy')}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-4 flex-grow">
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </div>
                  <CardFooter className="p-6 pt-0 flex flex-col items-start w-full">
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
        </section>
      </div>
    </>
  );
}
