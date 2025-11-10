import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import { Label } from "@radix-ui/react-label";
import * as styles from "./settings.css";

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Настройки профиля
      </Heading>
      <Text className={styles.description}>
        Управляйте своими данными, уведомлениями и предпочтениями
      </Text>

      <div className={styles.settingsGrid}>
        <Card className={styles.settingCard}>
          <Heading as="h2" className={styles.cardTitle}>
            Профиль
          </Heading>
          <div className={styles.fieldGroup}>
            <Label htmlFor="name" className={styles.label}>
              Имя
            </Label>
            <Input id="name" placeholder="Иван Петров" />
          </div>
          <div className={styles.fieldGroup}>
            <Label htmlFor="email" className={styles.label}>
              Email
            </Label>
            <Input id="email" type="email" placeholder="ivan@example.com" />
          </div>
          <div className={styles.fieldGroup}>
            <Label htmlFor="phone" className={styles.label}>
              Телефон
            </Label>
            <Input id="phone" type="tel" placeholder="+7 (XXX) XXX-XX-XX" />
          </div>
          <Button variant="primary" size="md">
            Сохранить
          </Button>
        </Card>

        <Card className={styles.settingCard}>
          <Heading as="h2" className={styles.cardTitle}>
            Уведомления
          </Heading>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} defaultChecked />
              <Text>Новые заказы</Text>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} defaultChecked />
              <Text>Новые сообщения</Text>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <Text>Скидки и акции</Text>
            </label>
          </div>
          <Button variant="primary" size="md">
            Сохранить
          </Button>
        </Card>

        <Card className={styles.settingCard}>
          <Heading as="h2" className={styles.cardTitle}>
            Приватность
          </Heading>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="privacy" className={styles.radio} defaultChecked />
              <Text>Виден всем</Text>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="privacy" className={styles.radio} />
              <Text>Только по приглашениям</Text>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="privacy" className={styles.radio} />
              <Text>Скрыт</Text>
            </label>
          </div>
          <Button variant="primary" size="md">
            Сохранить
          </Button>
        </Card>

        <Card className={styles.settingCard}>
          <Heading as="h2" className={styles.cardTitle}>
            Безопасность
          </Heading>
          <div className={styles.fieldGroup}>
            <Label htmlFor="password" className={styles.label}>
              Текущий пароль
            </Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className={styles.fieldGroup}>
            <Label htmlFor="new-password" className={styles.label}>
              Новый пароль
            </Label>
            <Input id="new-password" type="password" placeholder="••••••••" />
          </div>
          <div className={styles.fieldGroup}>
            <Label htmlFor="confirm-password" className={styles.label}>
              Подтвердите пароль
            </Label>
            <Input id="confirm-password" type="password" placeholder="••••••••" />
          </div>
          <Button variant="primary" size="md">
            Изменить пароль
          </Button>
        </Card>
      </div>
    </div>
  );
}