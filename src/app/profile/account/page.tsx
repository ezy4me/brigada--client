import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import * as styles from "./account.css";

export default function AccountPage() {
  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Учетная запись
      </Heading>
      <Text className={styles.description}>
        Управляйте своими данными и настройками безопасности
      </Text>

      <Card className={styles.formCard}>
        <div className={styles.fieldGroup}>
          <Input label="Имя" placeholder="Иван" />
          <Input label="Фамилия" placeholder="Петров" />
        </div>
        <Input label="Email" type="email" placeholder="ivan@example.com" />
        <Input label="Телефон" type="tel" placeholder="+7 (999) 123-45-67" />

        <Button variant="primary" size="md" className={styles.saveButton}>
          Сохранить
        </Button>
      </Card>
    </div>
  );
}