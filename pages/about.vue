<template>
  <h1>About</h1>
</template>


<script>
export default {
  async asyncData(context) {
    console.log(context);
    // console.log(`slug : ${context.params.slug}`);
    // const article = await context
    //   .$content("articles", context.params.slug)
    //   .fetch();

    // return { article };
  },
};
</script>