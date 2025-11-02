import { Hero } from "@/widgets/hero/ui/Hero";

import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { Textarea } from "@/shared/ui/textarea/textarea";

import {
  ArrowRight,
  Mail,
  Lock,
  User,
  CheckCircle,
  AlertCircle,
  Search,
  Eye,
  MessageCircle,
} from "lucide-react";

import * as styles from "./page.css";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import BackgroundLines from "@/shared/ui/background-lines/BackgroundLines";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card/card";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";
import { TargetAudience } from "@/widgets/target-audience/ui/TargetAudience";
import { Partners } from "@/widgets/partners/ui/Partners";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <BackgroundLines />

      <main className={styles.main}>
        <Hero />

        <TargetAudience />

        <Partners />

        <WhyChooseUs />

        <FAQSection />

        {/* <section className={styles.section}>
          <Card>
            <CardHeader>
              <CardTitle>Добро пожаловать!</CardTitle>
              <CardDescription>Это описание карточки</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Основной контент карточки.</p>
            </CardContent>
            <CardFooter>
              <Button>Действие</Button>
            </CardFooter>
          </Card>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Варианты кнопок</h2>
          <div className={styles.buttonGroup}>
            <Button size="sm">Default Sm</Button>
            <Button size="md">Default Md</Button>
            <Button size="lg">Default Lg</Button>

            <Button variant="outline" size="sm">
              Outline Sm
            </Button>
            <Button variant="outline" size="md">
              Outline Md
            </Button>
            <Button variant="outline" size="lg">
              Outline Lg
            </Button>

            <Button variant="ghost" size="sm">
              Ghost Sm
            </Button>
            <Button variant="ghost" size="md">
              Ghost Md
            </Button>
            <Button variant="ghost" size="lg">
              Ghost Lg
            </Button>

            <Button variant="destructive" size="sm">
              Delete Sm
            </Button>
            <Button variant="destructive" size="md">
              Delete Md
            </Button>
            <Button variant="destructive" size="lg">
              Delete Lg
            </Button>

            <Button leftIcon={<ArrowRight size={24} />} size="md">
              Left Icon
            </Button>
            <Button rightIcon={<ArrowRight size={24} />} size="md">
              Right Icon
            </Button>
            <Button
              leftIcon={<ArrowRight size={24} />}
              rightIcon={<ArrowRight size={24} />}
              size="md"
            >
              Both Icons
            </Button>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Варианты Input</h2>
          <div className={styles.buttonGroup}>
            <Input label="Email" placeholder="you@example.com" />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            <Input label="Username" placeholder="username" />

            <Input
              label="Email"
              leftIcon={<Mail size={16} />}
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              leftIcon={<Lock size={16} />}
              rightIcon={<Eye size={16} />}
              placeholder="••••••••"
            />
            <Input
              label="Username"
              leftIcon={<User size={16} />}
              placeholder="username"
            />

            <Input label="Small" size="sm" placeholder="Small input" />
            <Input label="Medium" size="md" placeholder="Medium input" />
            <Input label="Large" size="lg" placeholder="Large input" />

            <Input
              label="Error Input"
              error
              helperText="This field is required"
              leftIcon={<AlertCircle size={16} />}
              placeholder="Invalid input"
            />
            <Input
              label="Success Input"
              success
              helperText="Valid input"
              leftIcon={<CheckCircle size={16} />}
              placeholder="Valid input"
            />

            <Input
              label="Search"
              leftIcon={<Search size={16} />}
              placeholder="Type to search..."
            />
            <Input
              label="Password"
              type="password"
              leftIcon={<Lock size={16} />}
              rightIcon={<Eye size={16} />}
              error
              helperText="Password is too weak"
              placeholder="••••••••"
            />
          </div>

          <Textarea
            label="Your message"
            placeholder="Type something..."
            leftIcon={<MessageCircle size={16} />}
            error
            helperText="Message is too short"
            size="md"
          />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
