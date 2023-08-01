import {
  DsCenter,
  DsDrawer,
  DsDrawerProps,
  DsStackVertical,
  DsText,
} from "@raisesistemas/ds";

import { NotificationEmpty } from "../NotificationEmpty";
import { NotificationItem, NotificationItemProps } from "../NotificationItem";

type NotificationDrawerProps = Pick<DsDrawerProps, "opened" | "onClose">;

const notifications: NotificationItemProps[] = [
  {
    read: false,
    type: "trending_post",
  },
  {
    read: true,
    type: "new_post",
  },
  {
    read: true,
    type: "post_like",
  },
  {
    read: true,
    type: "new_post",
  },
  {
    read: false,
    type: "post_like",
  },
  {
    read: false,
    type: "post_like",
  },
];

export const NotificationDrawer = (props: NotificationDrawerProps) => {
  return (
    <DsDrawer title={"Notificações"} {...props}>
      {notifications.length > 0 && (
        <>
          <DsStackVertical>
            {notifications.map((notification) => (
              <NotificationItem {...notification} />
            ))}

            <DsCenter>
              <DsText variant="body-3" weight="regular" color="dimmed">
                {"humm"}
              </DsText>
            </DsCenter>
          </DsStackVertical>
        </>
      )}

      {notifications.length === 0 && (
        <NotificationEmpty onNavigate={props.onClose} />
      )}
    </DsDrawer>
  );
};
