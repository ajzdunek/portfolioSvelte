<script>
  import Form from 'sveltestrap/src/Form.svelte';
  import FormGroup from 'sveltestrap/src/FormGroup.svelte';
  // import FormText from 'sveltestrap/src/FormText.svelte';
  import Label from 'sveltestrap/src/Label.svelte';
  import Input from 'sveltestrap/src/Input.svelte';
  import Button from 'sveltestrap/src/Button.svelte';


const color = ["dark"]

</script>


<style>
   .contact-me{
       padding-top: 5%;
   }

.az-sd{
  text-align: center;
  width: 100%;
  padding-top: 4%;
}
</style>


<svelte:head>
	<title>Contact</title>
</svelte:head>

<Form action="https://getform.io/f/f2e358e9-c556-4b61-825c-fe6e9f9fe008" method="POST">
<div class="contact-me container">
 <FormGroup>
    <Label for="exampleUrl">First Name</Label>
    <Input
      type="text"
      name="first-name"
      id="first-name"
      class="form-control" 
      placeholder="" 
      required="true"/>
      
  </FormGroup>

   <FormGroup>
    <Label for="exampleUrl">Last Name</Label>
    <Input
      type="text"
      name="last-name"
      id="last-name"
      class="form-control" 
      placeholder="" 
      required="true" />
  </FormGroup>

  <FormGroup>
    <Label for="exampleEmail" required>Email</Label>
    <Input
      type="email"
      name="email"
      id="email"
      class="form-control" 
      placeholder=""
      required="true"/>
      
  </FormGroup>

  <FormGroup>
    <Label for="exampleText">Reach Out</Label>
    <Input type="textarea" name="text" id="exampleText" placeholder="Let's Chat" rows="5" />
  </FormGroup>

    <Button type="submit" value="thanks.html" outline {color}>Submit</Button>

  </div>
</Form>

 <div class="az-sd">
              <footer>© 2020 AZ | Software Developement</footer>
        <div class="container py-3 text-center">
              <a href="https://www.linkedin.com/in/azdunek/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-2x mr-2"></i></a>
              <a href="https://twitter.com/ZdunekAndrew" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x ml-2"></i></a>
              <a href="https://github.com/ajzdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x ml-3"></i></a>
              <a href="https://stackoverflow.com/users/9090178/azdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x ml-3"></i></a>
        </div>
  </div> 


  