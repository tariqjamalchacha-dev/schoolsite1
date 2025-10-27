import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, BookOpen, Heart } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | APSIS Hyd',
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight">About Our School</h1>
        <p className="mt-2 text-lg text-muted-foreground">Learn more about our community, values, and commitment to excellence.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-accent" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              To provide a supportive and challenging learning environment where students can achieve their full academic potential and develop into responsible, compassionate, and engaged global citizens. We are committed to fostering a love of learning that lasts a lifetime.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-accent" />
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Integrity:</strong> Upholding the highest standards of honesty and ethical behavior.</li>
              <li><strong>Excellence:</strong> Striving for the best in all academic and extracurricular pursuits.</li>
              <li><strong>Respect:</strong> Fostering a community where every individual is valued and heard.</li>
              <li><strong>Community:</strong> Building strong, collaborative relationships among students, staff, and families.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-accent" />
            Our History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Founded in 1985, our school has a rich history of academic achievement and community involvement. From our humble beginnings with just 50 students, we have grown into a thriving educational institution serving over 1,200 students from diverse backgrounds.
          </p>
          <p>
            Over the decades, we have consistently adapted to the changing landscape of education, integrating new technologies and innovative teaching methods to prepare our students for the future. Our commitment to excellence has been recognized with numerous awards, but our greatest pride comes from the success and character of our alumni.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
