<script lang="ts">
    import Contacts from './components/Contacts.svelte';
    import Timeline from './components/chat/Timeline.svelte';
    import { UserService } from './services/user.service';
    import type { ProfileInterface } from './interfaces/profile.interface';

    const userService = new UserService();
    const currentUser: ProfileInterface = userService.getCurrentUser();
</script>

<aside class="flex grid-cols-1 md:grid-cols-2 divide-x divide-blue-100 ">
    <div class="w-full md:w-1/4">
        <Contacts></Contacts>
    </div>
    <div class="hidden md:w-3/4 md:block">
        <!--<Timeline></Timeline>-->
    </div>
</aside>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>