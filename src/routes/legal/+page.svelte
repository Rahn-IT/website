<script>
	import Address from "$lib/info/Address.svelte";
	import Iban from "$lib/info/IBAN.svelte";
	import Mail from "$lib/info/Mail.svelte";
	import Phone from "$lib/info/Phone.svelte";
	import Ust from "$lib/info/Ust.svelte";

</script>
<div class="py-8 ">
    <table class="table text-lg">
        <tbody>
            <tr>
            <td>Vertreter</td>
            <td>Heinz Rahn</td>
        </tr>
            <tr>
                <td>Addresse</td>
                <td><Address withName/></td>
            </tr>
            <tr>
                <td>Telefon</td>
                <td><Phone/></td>
            </tr>
            <tr>
                <td>E-Mail</td>
                <td><Mail/></td>
            </tr>
            <tr>
                <td>USt-ID</td>
                <td><Ust/></td>
            </tr>
            <tr>
                <td>IBAN</td>
                <td><Iban/></td>
            </tr>
        </tbody>
  </table>
</div>