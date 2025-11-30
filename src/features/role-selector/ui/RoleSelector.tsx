"use client";

import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import {
  roleGroup,
  separator,
  roleButton,
  indicator,
  mobileDropdownWrapper,
  mobileTrigger,
  dropdownList,
  dropdownItem,
} from "./roleSelector.css";


export type Role = "executors" | "customers" | "companies";

export interface RoleSelectorProps {
  initialRole?: Role | undefined;
  activeRole?: Role;
  onRoleChange?: (role: Role) => void;
  className?: string;
}

export const RoleSelector = ({
  initialRole,
  activeRole,
  onRoleChange,
  className,
}: RoleSelectorProps) => {
  const [localActiveRole, setLocalActiveRole] = useState<Role | undefined>(initialRole);

  useEffect(() => {
    if (activeRole) {
      setLocalActiveRole(activeRole);
    }
  }, [activeRole]);

  const [indicatorDimensions, setIndicatorDimensions] = useState({
    left: 0,
    width: 0,
  });
  const buttonsRef = useRef<{ [key in Role]?: HTMLButtonElement | null }>({});

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

  const [isOpen, setIsOpen] = useState(false);

  const roleLabels = {
    executors: "Исполнители",
    customers: "Заказчики",
    companies: "Компании",
  };

  return (
    <>
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
        {(["executors", "customers", "companies"] as Role[]).map((role, index, array) => (
          <React.Fragment key={role}>
            <motion.button
              ref={(el) => {
                buttonsRef.current[role] = el;
              }}
              className={roleButton({
                active: localActiveRole === role,
              })}
              onClick={() => handleSelect(role)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {roleLabels[role]}
            </motion.button>

            {index < array.length - 1 && <div className={separator} />}
          </React.Fragment>
        ))}
      </div>

      <div className={mobileDropdownWrapper}>
        <button className={mobileTrigger()} onClick={() => setIsOpen(!isOpen)}>
          <span>{localActiveRole ? roleLabels[localActiveRole] : "Выберите роль"}</span>
          <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className={dropdownList}>
            {(["executors", "customers", "companies"] as Role[]).map((role) => (
              <button
                key={role}
                className={dropdownItem({
                  active: localActiveRole === role,
                })}
                onClick={() => {
                  handleSelect(role);
                  setIsOpen(false);
                }}
              >
                {roleLabels[role]}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

RoleSelector.displayName = "RoleSelector";
