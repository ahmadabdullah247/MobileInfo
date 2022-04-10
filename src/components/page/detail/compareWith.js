import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { DeviceMobile, Plus } from 'tabler-icons-react';

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<DeviceMobile size={18} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <Plus size={18} />
        </ActionIcon>
      }
      placeholder="Search mobile to compare"
      rightSectionWidth={42}
      {...props}
    />
  );
}