import { Card } from "@/shared/ui/card/Card";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Button } from "@/shared/ui/button/Button";
import { Star, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import * as styles from "./orderCard.css";

export interface OrderCardProps {
  title: string;
  description: string;
  rating: number;
  authorName: string;
  authorType: "executor" | "company" | "customer";
  region: string;
  price: number;
  keywords: string[];
  showContactButton?: boolean;
  onShowContact?: () => void;
}

export const OrderCard = ({
  title,
  description,
  rating,
  authorName,
  authorType,
  region,
  price,
  keywords,
  showContactButton = false,
  onShowContact,
}: OrderCardProps) => {
  return (
    <Card className={styles.card}>
      <div className={styles.shineElement} />

      <div className={styles.header}>
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <div className={styles.rating}>
          <Star size={16} fill="currentColor" />
          <Text>{rating.toFixed(1)}</Text>
        </div>
      </div>

      <div className={styles.author}>
        <Text className={styles.authorName}>{authorName}</Text>
        <Text className={styles.authorType}>({authorType})</Text>
      </div>

      <Text className={styles.description}>{description}</Text>

      <div className={styles.details}>
        <div className={styles.detail}>
          <MapPin size={16} />
          <Text>{region}</Text>
        </div>
        <div className={styles.detail}>
          <Briefcase size={16} />
          <Text>{price.toLocaleString()} ₽</Text>
        </div>
      </div>

      <div className={styles.footer}>
        {showContactButton ? (
          <Button
            variant="primary"
            size="sm"
            onClick={onShowContact}
            className={styles.actionButton}
          >
            Показать телефон
          </Button>
        ) : (
          <Link href="/login">
            <Button variant="outline" size="sm" className={styles.actionButton}>
              Войти и откликнуться
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
};