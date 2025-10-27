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

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
        </section>
      </main>
    </div>
  );
}
