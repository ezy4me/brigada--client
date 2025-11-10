"use client";

import { Button } from '@/shared/ui/button/Button';
import { Text } from '@/shared/ui/text/Text';
import { Heading } from '@/shared/ui/heading/Heading';
import { LogOut, Settings } from 'lucide-react';
import * as styles from './profileHeader.css';
import { useRouter } from 'next/navigation';

export const ProfileHeader = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const handleSettings = () => {
    router.push('/profile/settings');
  };


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Heading as="h1" className={styles.title}>
              Бригада.ру
            </Heading>
            <Text className={styles.subtitle}>Личный кабинет</Text>
          </div>

          <div className={styles.userActions}>
            <Button variant="ghost" size="sm" onClick={handleSettings}>
              <Settings size={16} />
              <Text>Настройки</Text>
            </Button>
            
            <div className={styles.userInfo}>
              <div className={styles.userDetails}>
                <Text className={styles.userRole}>
                </Text>
              </div>
            </div>

            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={16} />
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};