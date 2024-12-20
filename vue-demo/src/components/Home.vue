<script setup lang="ts">
import { ref } from 'vue';
import SkillCards from './SkillCards.vue';
import AboutMe from './AboutMe.vue';
import { MySkills } from './inteface/Skill';
const mySkills = ref(MySkills);

</script>
<template>
    <div class="container-sm">
        <div style="padding-top: 3%;">
            <div id="top">
                <p class="display-4" id="#top">Welcome to Kai's profile</p>
            </div>

            <!-- 專業技能 -->
            <div id="about">
                <AboutMe />
                <!-- demo格言 -->
                <figure>
                    <blockquote class="blockquote">The way to get started is to quit talking and begin doing.
                    </blockquote>
                    <figcaption class="blockquote-footer"><cite>Walt Disney</cite></figcaption>
                </figure>
            </div>
            <!-- 專業技能 -->
            <div id="skills">
                <strong class="display-4" style="font-weight: bold;">Skills</strong>
                <div class="row row-cols-4 gx-3">
                    <div class="col" v-for="skill in mySkills.values()">
                        <SkillCards :skill="skill" />
                    </div>
                </div>
            </div>

            <!-- 專業技能 -->
            <div id="exp">
                <strong class="display-4" style="font-weight: bold;">專業技能</strong>
                <div class="row row-cols-4 gx-3">
                    <div class="col" v-for="skill in mySkills.values()">
                        <SkillCards :skill="skill" />
                    </div>
                </div>
            </div>
            <!-- 專業技能 -->
            <div id="proj">
                <strong class="display-4" style="font-weight: bold;">專業技能</strong>
                <div class="row row-cols-4 gx-3">
                    <div class="col" v-for="skill in mySkills.values()">
                        <SkillCards :skill="skill" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>