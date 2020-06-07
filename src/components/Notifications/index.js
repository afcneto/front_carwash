import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#f29200" size={20} />
      </Badge>
    </Container>
  );
}
