<template>
  <main class="content fadein">
    <article class="block">
      <section v-if="activePage=='about'" class="" v-html="aboutContent"></section>
      <section v-if="activePage=='experience'" class="txt">{{ experienceContent }}</section>
      <section v-if="activePage=='projects'" class="txt">{{ projectsContent }}</section>
      <section v-if="activePage=='contact'" class="txt">{{ contactContent }}</section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'content',
  props: [ 'activePage' ],
  data() {
    return {
      aboutContent: `<div>{
  Name: "Daniel Salazar"
  Age: 22,
  Country: "Colombia",
  Current_Job: "Infrastructure Analyst",
  Desired_Job: "Python/JavaScript Developer or DevOps",
  Experience: "3 years working on Infrastructure",
  Programming_Skills: [
    "8 months - software development certification",
    "1 year - Autonomous learning" 
    ]
}</div>`,
      experienceContent: `
      Knowledges: ["Cloud Computing(AWS, Private Cloud)", "Windows", "Linux",
      "SQL", "troubleshoot", "Git", "Agile", "Virtualization", "Scripting"]`,
      projectsContent: 'Projects',
      contactContent: 'Contact',
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">

/*------------------------ Main-Content ------------------------*/

.content {
  min-height: calc(75vh - 4px);
  display: flex;
  justify-content: center;
  background-color: var(--complement-b1);
  // background:linear-gradient( rgba(0, 27, 38, 0.9) 100%, rgba(0, 27, 38, 0.9)100%),url("../assets/pointed2.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  outline: 2px solid var(--gray-d1);
}

.block {
  margin: 2rem;
}

.txt{
  font-size: 2rem;
  text-align: left;
  animation: fadein 3s;
}

</style>
