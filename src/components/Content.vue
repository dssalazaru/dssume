<template>
  <section class="content transition-fadeIn">
    <div class="block">
      <div  v-if="active=='about'" class="txt" v-html="aboutContent"></div>
      <div v-if="active=='experience'" class="txt">{{ experienceContent }}</div>
      <div v-if="active=='projects'" class="txt">{{ projectsContent }}</div>
      <div v-if="active=='contact'" class="txt">{{ contactContent }}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    active: String
  },
  data() {
    return {
      aboutContent: `<pre>{
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
}</pre>`,
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
  background:linear-gradient( rgba(0, 27, 38, 0.9) 100%, rgba(0, 27, 38, 0.9)100%),url("../assets/pointed2.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  outline: 2px solid var(--gray-d1);
}

.block {
  margin: 5rem;
}

.txt{
  font-size: 2rem;
  // display: inline;
  text-align: left;

  animation: fadeIn 3s;
}

</style>
