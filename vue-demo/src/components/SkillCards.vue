<script setup lang="ts">
import { Skill } from './inteface/Skill';
defineProps<{
    skill: Skill
}>();


</script>
<template>
    <div class="card border-secondary h-100">
        <img :src="skill.ImageSrc" class="card-top-image img-fit" data-bs-toggle="collapse" 
            :data-bs-target="'#content-'+skill.Name" type="button">        
        <div class="card-body" :id="'content-'+skill.Name">
            <h4 class="card-title">{{ skill.Name }}</h4>
            <div :class="skill.BtnSetting.length > 1 ? 'row row-cols-2' : ''">
                <button v-for="item in skill.BtnSetting" class="col"
                    :class="Array.isArray(item.Class) ? item.Class.join(' ') : item.Class">{{ item.ToolName }}</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.img-fit {
    max-width: 128px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
}
</style>