<script>
  import Form from 'sveltestrap/src/Form.svelte';
  import FormGroup from 'sveltestrap/src/FormGroup.svelte';
  import FormText from 'sveltestrap/src/FormText.svelte';
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


<Form>
<div class="contact-me container">
 <FormGroup>
    <Label for="exampleUrl">First Name</Label>
    <Input
      type="firstName"
      name="name"
      id="fname"
      placeholder="" 
      required="true"/>
      
  </FormGroup>

   <FormGroup>
    <Label for="exampleUrl">Last Name</Label>
    <Input
      type="lastName"
      name="name"
      id="lname"
      placeholder="" 
      required="true" />
  </FormGroup>

  <FormGroup>
    <Label for="exampleEmail" required>Email</Label>
    <Input
      type="email"
      name="email"
      id="exampleEmail"
      placeholder=""
      required="true"/>
      
  </FormGroup>

  <FormGroup>
    <Label for="exampleText">Reach Out</Label>
    <Input type="textarea" name="text" id="exampleText" placeholder="Let's Chat" />
  </FormGroup>

    <Button type="submit" outline {color}>Submit</Button>

  </div>
</Form>

 <div class="az-sd">
              <footer>AZ | Software Developement</footer>
        <div class="container py-3 text-center">
              <a href="https://www.linkedin.com/in/azdunek/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-2x mr-2"></i></a>
              <a href="https://github.com/ajzdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x ml-3"></i></a>
              <a href="https://stackoverflow.com/users/9090178/azdunek" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x ml-3"></i></a>
        </div>
  </div> 