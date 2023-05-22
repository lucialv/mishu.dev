<template>
  <div class="w-[300px] dark:text-slate-200 drop-shadow-xl font-['Whitney']">
    <div
      class="h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-900"
    >
      <!-- headerWrapper -->
      <div class="relative">
        <!-- banner -->
        <picture>
          <source type="image/webp" srcset="/images/banner.webp" />
          <source type="image/gif" srcset="/images/banner.gif" />
          <img
            fetchpriority="high"
            src="/images/banner.gif"
            alt="banner"
            width="300"
            height="120"
            aria-hidden="true"
            draggable="false"
            class="block"
          />
        </picture>
        <!-- avatarWrapperNormal -->
        <div class="absolute top-[76px] left-[16px]">
          <!-- avatarWrapperTarget -->
          <div class="rounded-full">
            <user-card-avatar :status="user.discord_status" />
          </div>
        </div>
        <img
          src="https://cdn.discordapp.com/emojis/1097524725464432750.webp?size=44&quality=lossless"
          iara-label=":iara_snuggie:"
          alt="iara_snuggie"
          draggable="false"
          class="w-6 h-6 absolute top-[110px] right-[32px]"
        />
        <img
          src="https://cdn.discordapp.com/emojis/1097524744720482395.webp?size=44&quality=lossless"
          iara-label=":iara_snuggie:"
          alt="iara_snuggie"
          draggable="false"
          class="w-6 h-6 absolute top-[110.3px] right-[10px]"
        />
      </div>
      <!-- headerTop -->
      <div class="pt-16 pb-3 px-4">
        <!-- headerText -->
        <div class="text-xl font-semibold leading-6">
          <span class="text-zinc-900 dark:text-slate-50">mishhuu</span>
          <span class="dark:text-slate-300">#0001</span>
        </div>

        <!-- profileBadges -->
        <div aria-label="User Badges" role="list"></div>
      </div>

      <!-- body -->
      <div class="px-4 pb-3.5 flex-initial text-sm">
        <!-- customStatus -->
        <div class="pb-2.5">
          <img
            src="https://cdn.discordapp.com/emojis/743960005924880494.webp?size=44&quality=lossless"
            iara-label=":iara_snuggie:"
            alt="iara_snuggie"
            draggable="false"
            class="w-5 h-5 -my-px mr-1 float-left"
          />
          <span v-if="activity" :data="activity"
            >Playing <strong>{{ activity.name }}</strong></span
          >
          <span v-else> If you see this, I love you &lt;3 </span>
        </div>

        <!-- divider -->
        <div class="w-full h-[1px] bg-slate-200 dark:bg-zinc-800 mb-3"></div>
        <user-card-info />
        <user-card-dates />
        <user-card-activity v-if="activity" :data="activity" />
        <user-card-roles />
        <user-card-note />

        <user-card-message />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanyardIncomingPayload, LanyardOpcode } from "~~/composables/use-user";

const user = useUser();
const config = useRuntimeConfig();
const activity = computed(() =>
  user.value.activities.find((activity) => activity.assets)
);

function connect() {
  let heartbeatInterval = -1;
  const websocket = new WebSocket("wss://api.lanyard.rest/socket");

  websocket.onopen = () => console.info("[WS] Successfully connected");
  websocket.onerror = (event) => {
    console.error("[WS] Received error: ", event);
    websocket.close();
  };
  websocket.onclose = (event) => {
    console.error(
      "[WS] Closed with code %d. Retrying in 1 second.",
      event.code
    );
    if (heartbeatInterval !== -1) {
      window.clearInterval(heartbeatInterval);
      heartbeatInterval = -1;
    }
    window.setTimeout(() => connect(), 1000);
  };
  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data) as LanyardIncomingPayload;
    switch (data.op) {
      case LanyardOpcode.Event:
        user.value = data.d;
        break;
      case LanyardOpcode.Hello: {
        if (heartbeatInterval !== -1) window.clearInterval(heartbeatInterval);
        heartbeatInterval = window.setInterval(
          () => websocket.send(JSON.stringify({ op: LanyardOpcode.Heartbeat })),
          data.d.heartbeat_interval
        );

        websocket.send(
          JSON.stringify({
            op: 2,
            d: { subscribe_to_id: config.public.DISCORD_USER_ID },
          })
        );
        break;
      }
      default:
        console.info("[WS] Unknown message: %d", data);
    }
  };
}

connect();
</script>
