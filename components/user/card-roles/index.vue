<template>
  <h2
    class="font-bold text-xs text-zinc-700 dark:text-slate-300 leading-4 mb-2 uppercase"
  >
    Roles
  </h2>
  <div
    aria-label="Roles"
    role="list"
    tabindex="0"
    class="mt-0.5 mb-3 flex flex-wrap"
  >
    <user-card-roles-item
      role="TypeScript"
      class-color="bg-gradient-to-tl from-blue-700 to-blue-200"
    />
    <user-card-roles-item
      role="JavaScript"
      class-color="bg-gradient-to-tl from-amber-700 to-amber-200"
    />
    <user-card-roles-item
      role="Python"
      class-color="bg-gradient-to-tl from-yellow-600 to-amber-200"
    />
    <user-card-roles-item
      role="C#"
      class-color="bg-gradient-to-tl from-violet-400 to-pink-400"
    />
  </div>
</template>
