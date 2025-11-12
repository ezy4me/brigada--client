import { Card } from "@/shared/ui/card/Card";
import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";
import { Textarea } from "@/shared/ui/textarea/Textarea";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Switch } from "@/shared/ui/switch/Switch";
import * as styles from "./support.css";

export default function SupportPage() {
  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Техническая поддержка
      </Heading>
      <Text className={styles.description}>
        Опишите вашу проблему, и мы поможем в течение 24 часов
      </Text>

      <Card className={styles.supportCard}>
        <div className={styles.formGroup}>
          <Input
            label="Тема обращения"
            placeholder="Кратко опишите проблему"
          />
        </div>

        <div className={styles.formGroup}>
          <Textarea
            label="Сообщение"
            placeholder="Подробно опишите вашу проблему..."
          />
        </div>

        <div className={styles.formGroup}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <Switch id="urgent" />
            <label htmlFor="urgent">
              <Text>Срочное обращение</Text>
            </label>
          </div>
        </div>

        <Button variant="primary" size="md" className={styles.sendButton}>
          Отправить
        </Button>
      </Card>
    </div>
  );
}
