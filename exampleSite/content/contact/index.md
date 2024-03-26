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

<form method="post" action="https://forms.un-static.com/forms/7cdf474431345d93b3e0cb86cf4a656764fdd5af">
  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Name</label>
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-user"></i>
        </div>
        <input id="name" name="name" placeholder="Please enter your name" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="email" class="col-4 col-form-label">E-mail address</label>
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-envelope"></i>
        </div>
        <input id="email" name="email" placeholder="Your e-mail address" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="message" class="col-4 col-form-label">Message</label>
    <div class="col-8">
      <textarea id="message" name="message" cols="40" rows="10" required="required" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <div class="offset-4 col-8">
      <p><button name="submit" type="submit" class="btn btn-primary"> Send </button>
    </div>
  </div>
  <div class="text-center">
    <p><small>(Powered by <a rel="nofollow" href="Un-static Forms">Un-static Formsssss</a>)</small></p>
  </div>
</form>


{{< button name="submit" type="submit" class="btn btn-primary" >}} Send {{< /button >}}
