<template>
  <div id="app">
    <div class="text-2xl px-4 pt-1">
      <a href="https://bigorange.cloud/updates">
        Big<span class="-lg text-orange-500">Orange</span>.Cloud/Updates</a
      >
    </div>
    <div class="">
      <div v-for="item in groupedItems" :key="item.id" class="px-3 py-1">
        <div v-if="item.title" :class="{ 'font-bold': item.isNew }">
          <a :href="item.link" target="_blank" class="text-lg">
            {{ item.title }}
          </a>
          <span class="text-sm px-2 font-thin text-gray-500">
            {{ item.source }}
          </span>
        </div>
        <div v-else>
          <div class="pt-1 text-xs float-left w-full text-gray-500">
            {{ friendlyDate(item.date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lastVisit: null,
      items: [],
    }
  },
  components: {},
  watch: {
    items(val) {
      console.debug(`${val.length} items recieved`)
    },
  },
  methods: {
    friendlyDate(date) {
      return new Date(date).toUTCString().slice(0, 11)
    },
  },
  computed: {
    groupedItems() {
      const groupedItems = []

      let lastDate = ''
      for (const item of this.sortedItems) {
        const date = item.publishedAt.slice(0, 10)
        if (date !== lastDate) {
          groupedItems.push({ date })
          lastDate = date
        }
        item.isNew = new Date(item.publishedAt) > new Date(this.lastVisit)
        groupedItems.push(item)
      }
      return groupedItems
    },
    sortedItems() {
      return this.items.slice().sort((a, b) => {
        return b.publishedAt.localeCompare(a.publishedAt)
      })
    },
  },
  mounted() {
    console.debug({ env: window.env })
    fetch(`https://bigorange.cloud/updates/api/items`)
      .then(response => response.json())
      .then(items => (this.items = items))
      .catch(() => (this.items = [
    {
        "link": "https://awsapichanges.info/archive/changes/1792dd-omics.html",
        "publishedAt": "2023-10-05T18:26:21.000Z",
        "source": "API Changes",
        "title": "Amazon Omics - 2 updated methods",
        "type": "api"
    },
    {
        "link": "https://awsapichanges.info/archive/changes/50ae5b-xray.html",
        "publishedAt": "2023-10-16T18:27:26.000Z",
        "source": "API Changes",
        "title": "AWS X-Ray - 1 updated methods",
        "type": "api"
    },
    {
        "link": "https://awsapichanges.info/archive/changes/c2079e-ec2.html",
        "publishedAt": "2023-10-02T18:24:25.000Z",
        "source": "API Changes",
        "title": "Amazon Elastic Compute Cloud - 24 updated methods",
        "type": "api"
    },
    {
        "link": "https://awsapichanges.info/archive/changes/c2079e-rds.html",
        "publishedAt": "2023-10-02T18:24:25.000Z",
        "source": "API Changes",
        "title": "Amazon Relational Database Service - 1 updated methods",
        "type": "api"
    },
    {
        "link": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html",
        "publishedAt": "2023-09-28T19:00:00.000Z",
        "source": "AWS CloudFormation Release Notes",
        "title": "Updated resource",
        "type": "status"
    }]))

    this.lastVisit = localStorage.getItem('lastVisit')
    console.debug('lastVisit', this.lastVisit)
    setTimeout(() => {
      localStorage.setItem('lastVisit', new Date().toISOString())
      console.debug('localStorage.lastVisit', localStorage.getItem('lastVisit'))
    }, 5000)
  },
}
</script>

<style></style>
