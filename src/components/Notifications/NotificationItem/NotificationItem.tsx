import { createStyles } from "@mantine/core";
import { DsGroup, DsStackVertical, DsText } from "@raisesistemas/ds";
import { NotificationOpenedIndicator } from "../NotificationOpenedIndicator";

export type NotificationItemProps = {
  type: "trending_post" | "new_post" | "post_like";
  read: boolean;
};

const useStyles = createStyles(({ primaryColor, colors }) => ({
  text: {
    color: colors[primaryColor][7],
    fontWeight: 600,
  },
  titleWrapper: {
    flex: 1,
    width: "100%",
  },
  fullWidth: {
    width: "100%",
  },
}));

import { DsButtonUnstyled } from "@raisesistemas/ds";

export const NotificationItem = (props: NotificationItemProps) => {
  const { read, type } = props;

  const { classes } = useStyles();

  return (
    <DsButtonUnstyled onClick={() => alert("Não implementado!")}>
      <DsGroup noWrap className={classes.fullWidth}>
        <DsStackVertical spacing={4} className={classes.fullWidth}>
          <DsGroup position="apart">
            <DsText variant="body-3" weight="semi-bold">
              {type === "trending_post" ? "trending" : "luiz"}
            </DsText>
            <NotificationOpenedIndicator opened={read} />
          </DsGroup>
          <DsText variant="body-3" weight="regular" color="dimmed">
            {"josé"}
          </DsText>
        </DsStackVertical>
      </DsGroup>
    </DsButtonUnstyled>
  );
};
