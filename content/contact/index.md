---
title: "Contact"
summary: "Send me an email using this form."
#categories: ["Post","Blog",]
#tags: ["post","lorem","ipsum"]
#externalUrl: ""
#showSummary: true
date: 2023-01-01
draft: false
---


<form method="post" action="https://forms.un-static.com/forms/7cdf474431345d93b3e0cb86cf4a656764fdd5af" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="name" name="name" placeholder="" type="text" required="required" class="form-control>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" placeholder="" type="text" required="required" class="form-control">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea id="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" cols="40" rows="10" required="required" class="form-control"></textarea>
      <p class="text-gray-600 text-xs italic">Please fill out all fields</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      {{<button name="submit" type="submit" class="btn btn-primary">}} Send {{< /button >}}
    </div>
  </div>
</form>
<div class="text-center">
  <p><small>(Powered by <a rel="nofollow" href="Un-static Forms">Un-static Forms</a>)</small></p>
</div>
