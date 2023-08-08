<template>
	<div class="w-[350px] font-['Whitney'] dark:text-slate-200">
		<div class="h-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-zinc-900">
			<!-- headerWrapper -->
			<div class="relative">
				<!-- banner -->

				<picture>
					<source type="image/webp" srcset="/images/banner.webp" />
					<source type="image/gif" srcset="/images/banner.gif" />
					<img src="/images/banner.gif" alt="banner" aria-hidden="true" draggable="false" class="block h-[123px] w-[350px]" />
				</picture>
				<!-- avatarWrapperNormal -->
				<div class="absolute left-[16px] top-[76px]">
					<!-- avatarWrapperTarget -->
					<div class="rounded-full">
						<user-card-avatar :status="user.discord_status" />
					</div>
				</div>

				<div>
					<div class="absolute right-8 top-[135px] h-8 w-32 rounded-lg bg-neutral-200 dark:bg-zinc-800"></div>
					<div>
						<img
							src="https://cdn.discordapp.com/emojis/1097524725464432750.webp?size=44&quality=lossless"
							alt="active-developer"
							draggable="false"
							class="absolute right-[107px] top-[138px] z-10 h-6 w-6 cursor-pointer"
						/>
					</div>
					<div>
						<p
							class="absolute right-8 top-20 m-2 w-auto min-w-max origin-top scale-0 rounded-md bg-white p-2 text-xs font-bold text-zinc-900 shadow-md transition-all duration-100 dark:bg-zinc-900 dark:text-white [div:hover+*>&]:scale-100"
						>
							Active Developer
						</p>
					</div>
					<div>
						<img
							src="https://cdn.discordapp.com/emojis/1097524744720482395.webp?size=44&quality=lossless"
							alt="hypesquad"
							draggable="false"
							class="absolute right-[130px] top-[138px] z-10 h-6 w-6 cursor-pointer"
						/>
					</div>
					<div>
						<p
							class="absolute right-12 top-20 m-2 w-auto min-w-max origin-top scale-0 rounded-md bg-white p-2 text-xs font-bold text-zinc-900 shadow-md transition-all duration-100 dark:bg-zinc-900 dark:text-white [div:hover+*>&]:scale-100"
						>
							HypeSquad Bravery
						</p>
					</div>
					<div>
						<img
							src="https://cdn.discordapp.com/emojis/1097524736101204108.webp?size=44&quality=lossless"
							alt="nitro"
							draggable="false"
							class="absolute right-[83px] top-[138px] z-10 h-6 w-6 cursor-pointer"
						/>
					</div>
					<div>
						<p
							class="absolute right-6 top-20 m-2 w-auto min-w-max origin-top scale-0 rounded-md bg-white p-2 text-xs font-bold text-zinc-900 shadow-md transition-all duration-100 dark:bg-zinc-900 dark:text-white [div:hover+*>&]:scale-100"
						>
							Subscriber since 28 May 2023
						</p>
					</div>
					<div>
						<img
							src="https://cdn.discordapp.com/emojis/1112318025182498876.webp?size=44&quality=lossless"
							alt="boost"
							draggable="false"
							class="absolute right-[58px] top-[138px] z-10 h-6 w-6 cursor-pointer"
						/>
					</div>
					<div>
						<p
							class="absolute right-6 top-20 m-2 w-auto min-w-max origin-top scale-0 rounded-md bg-white p-2 text-xs font-bold text-zinc-900 shadow-md transition-all duration-100 dark:bg-zinc-900 dark:text-white [div:hover+*>&]:scale-100"
						>
							Server Boosting since 28 May 2023
						</p>
					</div>
					<div>
						<img
							src="https://cdn.discordapp.com/emojis/1118229890756526170.webp?size=44&quality=lossless"
							alt="icon-username"
							draggable="false"
							class="absolute right-[35px] top-[138px] z-10 h-6 w-6 cursor-pointer"
						/>
					</div>
					<div>
						<p
							class="absolute right-6 top-20 m-2 w-auto min-w-max origin-top scale-0 rounded-md bg-white p-2 text-xs font-bold text-zinc-900 shadow-md transition-all duration-100 dark:bg-zinc-900 dark:text-white [div:hover+*>&]:scale-100"
						>
							Originally know as lucialv#0001
						</p>
					</div>
				</div>
			</div>
			<!-- headerTop -->
			<div class="px-8 pb-3 pt-16">
				<!-- headerText -->
				<div class="text-xl font-semibold leading-6">
					<span class="text-zinc-900 dark:text-slate-50">{{ user.discord_user.global_name }}</span>
				</div>
				<div class="text-md font-semibold leading-6">
					<span class="text-zinc-900 dark:text-slate-50">@{{ user.discord_user.username }}</span>
					<span class="dark:text-slate-300"></span>
				</div>

				<!-- profileBadges -->
				<div aria-label="User Badges" role="list"></div>
			</div>

			<!-- body -->
			<div class="flex-initial px-8 pb-7 text-sm">
				<!-- customStatus -->
				<div class="pb-2.5">
					<img
						src="https://cdn.discordapp.com/emojis/1111775552802668574.webp?size=44&quality=lossless"
						iara-label=":iara_snuggie:"
						alt="flushed-girl"
						draggable="false"
						class="float-left -my-px mr-1 h-5 w-5"
					/>
					<span v-if="user.activities[4]"
						>Playing <strong>{{ user.activities[1].name }} </strong>, <strong>{{ user.activities[2].name }} </strong>,
						<strong>{{ user.activities[3].name }} </strong> and <strong>{{ user.activities[4].name }}</strong
						>.</span
					>
					<span v-else-if="user.activities[3]"
						>Playing <strong>{{ user.activities[1].name }} </strong>, <strong>{{ user.activities[2].name }} </strong> and
						<strong>{{ user.activities[3].name }}</strong
						>.</span
					>
					<span v-else-if="user.activities[2] && !user.activities[3]"
						>Playing <strong>{{ user.activities[1].name }} </strong> and <strong>{{ user.activities[2].name }}</strong
						>.</span
					>
					<span v-else-if="user.activities[1] && !user.activities[2]"
						>Playing <strong>{{ user.activities[1].name }}</strong
						>.
					</span>
					<span v-else-if="user.activities[0] && user.activities[0].state?.includes('https://')">
						<a class="text-blue-700 hover:underline" target="_blank" :href="extractUrl(user.activities[0].state)">
							{{ user.activities[0].state }}
						</a></span
					>
					<span v-else-if="user.activities[0] && !user.activities[0].state?.includes('https://')"> {{ user.activities[0].state }} </span>
					<span v-else> ^^</span>
				</div>

				<!-- divider -->
				<div class="mb-3 h-[1px] w-full bg-slate-200 dark:bg-zinc-800"></div>
				<user-card-info />
				<user-card-dates />
				<user-card-activity v-if="activity" :spotdata="user.spotify" :testactivities="user.activities" :singleactivity="activity" />

				<user-card-roles />
				<user-card-note />

				<user-card-message />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { LanyardIncomingPayload, LanyardOpcode } from '~~/composables/use-user';

function extractUrl(text: string): string {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	const matches = text.match(urlRegex);
	return matches && matches.length > 0 ? matches[0] : '';
}
const user = useUser();
const config = useRuntimeConfig();
const activity = computed(() => user.value.activities.find((activity) => activity.assets));
function connect() {
	let heartbeatInterval = -1;
	const websocket = new WebSocket('wss://api.lanyard.rest/socket');

	websocket.onopen = () => console.info('[WS] Successfully connected');
	websocket.onerror = (event) => {
		console.log('[WS] Received error: ', event);
		websocket.close();
	};
	websocket.onclose = (event) => {
		console.log('[WS] Closed with code %d. Retrying in 1 second.', event.code);
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
						d: { subscribe_to_id: config.public.DISCORD_USER_ID }
					})
				);
				break;
			}
			default:
				console.info('[WS] Unknown message: %d', data);
		}
	};
}

connect();
</script>
