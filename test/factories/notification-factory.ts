import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;
// se na criação da notificaçao for passado no 'override' alguns do
// parametros já setados abaixo, ele ira substituir o já criado
export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override,
  });
}
