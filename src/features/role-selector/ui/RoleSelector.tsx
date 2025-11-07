"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { roleGroup, roleButton, indicator } from "./roleSelector.css";

export type Role = "executors" | "customers" | "companies";

export interface RoleSelectorProps {
  initialRole?: Role | undefined;
  activeRole?: Role;
  onRoleChange?: (role: Role) => void;
  className?: string;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  initialRole,
  activeRole,
  onRoleChange,
  className,
}) => {
  const [localActiveRole, setLocalActiveRole] = useState<Role | undefined>(
    initialRole
  );

  useEffect(() => {
    if (activeRole) {
      setLocalActiveRole(activeRole);
    }
  }, [activeRole]);

  const [indicatorDimensions, setIndicatorDimensions] = useState({
    left: 0,
    width: 0,
  });
  const buttonsRef = useRef<{ [key in Role]?: HTMLButtonElement | null }>(
    {}
  );

  useEffect(() => {
    const activeButton = buttonsRef.current[localActiveRole!];
    if (activeButton) {
      setIndicatorDimensions({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [localActiveRole]);

  const handleSelect = (role: Role) => {
    setLocalActiveRole(role);
    onRoleChange?.(role);
  };

  return (
    <div className={cn(roleGroup, className)}>
      <motion.div
        className={indicator}
        initial={false}
        animate={{
          left: indicatorDimensions.left,
          width: indicatorDimensions.width,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      />
      {(["executors", "customers", "companies"] as Role[]).map((role) => (
        <motion.button
          key={role}
          ref={(el) => {
            buttonsRef.current[role] = el;
          }}
          className={roleButton({ active: localActiveRole === role })}
          onClick={() => handleSelect(role)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {role === "executors" && "Исполнители"}
          {role === "customers" && "Заказчики"}
          {role === "companies" && "Компании"}
        </motion.button>
      ))}
    </div>
  );
};
