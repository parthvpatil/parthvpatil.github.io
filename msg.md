---
layout: post
nav-menu: false
permalink: chiru
show_tile: false
---

<form onsubmit="decrpyt_text()" action="#">
	<div class="row uniform">
		<div class="6u 12u(xsmall)">
			<input type="password" id="secret_key" value="" placeholder="Password" />
		</div>
		<!-- Break -->
		<div class="6u 12u$(xsmall)">
				<input type="submit" value="Decrpyt" class="special" />
		</div>
	</div>
</form>


<script>
function decrpyt_text(){
  var secret_key = document.getElementById("secret_key").value;
  var secret_text = document.getElementById("secret_text").textContent;
  var decrypted = CryptoJS.AES.decrypt(secret_text, secret_key);
  document.getElementById("secret_text").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}
</script>


<div id="secret_text">U2FsdGVkX1929iylyFNNUiUp+yd53NmX/jkiHsg6zuu2dUCCGDWOoQs9UvAovii/2U/+FtdEv/cO8dTIPr0iSFNWd+1rotewTalF6pDVaRcnk5vpmAke2j/rPrTFd24CJdEkyElSu8BXEc1zhyfky7jK35BXr9H7ih/OB4J6psY4UMiZYvYmCYp+u+r1V0cL000+KQJWcd65/eba/Rr7fe9PG0nMSd3v/8IsPkSBpzwSIDSVk7oY6h7o1fUUa2VZIujUpSyOuxKmkcl2V6s6/8Rn0GiWrt+tSaKLEN+duAm7YgfCZxbOskWItrC9rDHjNtUv6xLerYSXDsRGbUmnPtYEXHGRE87lks8oflivSlRHJAT7h6SzxLP4AGp5FNjbhTo7uYt3bXWo1HxDMu0QOaFUFIBZTXdfDTM3iYi6LgcfW0tFNR8blZvQaJPkt8EmmMLAtDY3awo3oWVyWSsnWEqkW7CO6rNVNDthy658fkEc9r4fOqcKlHz5PiW9diLnJsciNFAoPF/4s7Dd4s34NpIx+16BE+xCatByhmH7YA943vrK4H1oIVShSH+7ECUbGjai369qDp5v4fF5vxrZAzrcK3lExg6wpUVVRO5mdibz1L8pUoXM/SvSK6Xad3M62jS9YT75JVXQDeFAyTsa8m1sT6hGe739fIkQt3nHwQ1/iwjX1o0FOleoNfRVqN4r5kN79LmQLHc8HtfVdKt5bg+/Cx7VOs1h4donGoIi8dlQx4eUHvdQ2AWJ688V1wydvPe+9WXOxPG9o3KH5G0Jg1AUFW400Kp4+sQtuvMjH+JcpkXadTl52Ysqk1MyBYJjwdjbxE5a8L3bi4qsurKst7mIKqOZY9x+WH92LCCHMSXInbwDHw6zbEK5fAtaesEhrlzvewPcomWfu0brnphIbG0TRw2w1raLXoenlxqUwZ916J8Fp4MhwDuXeqHvpDsCLmZkYg8dYipwUkleLeExWpgtDPt3e/1xFVRsL+54qd1ERgoeMcRuOhK0ThFYLhZNJfid6Airc7bvQl5NX9gKNUVA9aV7ortO7y0EzDyJexpfd0iLmg2+P3zQGguEII25LqjcYwC5Ix1wanZdUEIGlE8hfx97VK9RiC2ElKWh8GrM1jaqQ/0jrxjVejFXdzBx0BWqnvrO8CO46xsJAyWDpyRBIo4qFEZzjg5jhCBzDJHZoei3y2p9TjZqjKnXz38GkLflSHBecn6yBBGF1kwOYjS7O1cznlXPsAKWF53LonBkryZY0nz9faEAOGZfTIZBNfkRmdiouCrFrZYoQZeLKGJS+5O8eYgozqqt1IdDEcR4fFgBEu0c/dQtJrxJaRxV4g4tmN6FSJFiJVQkBT0UJ+uv3NAfzvdv5mY1HmzR15SPYtiVLjMFs06gzMq3aKcc2WaBRVlHOVjWcNWOzFIXaz/ml+Edc4oOSsgk//Bo1EKKbN8zrS+YMYnTn1na10OfO1AckfeRPUQFyMpTHVxviZub5azoztUDy4v5nyA0PnjwcKd/Hbic+GXvzBZZbyX3K1tvPrNKAs1EuOxYwlUmb6sH6UnjBAnHbtDiNQP2aTGyb/mfHTBMx+SL+UK5bcRjIrfApdFlzPPLnulPnDDffe+MVtv7r5ddZ0A1cpbEDD2rTJoZbZPa9NEymhQzPufHovARFdssckWLX1iZQpluXaQx8zLkHUbpmdHq6mg411Ao/SLaidXkRjEQycQNVtUh9j3rXseICEYYUgq0eAA+dkP2PEsVslaBnoM3vZQI/NDwTujazd5Xwf6QTloorE+UHwQ3MLgvld1USjMlENmhm8ubfiS1FseHw4Wvtp2KvvPUNUyjFuI5VPsEwhXq8vzNrSIdWbFfD4moQnkNO59iDnGn8fuQ0NRMd5UCA58chJ8+wfY8yVnZWtN2jKz2C5IKiJ5hDjcsco5ZzFNQTkj2e8NiwaGyM8cwY3QWUPd0mcOzaQyVNVz5ug1MIYepvZ3kcIEGONbDFZKg8rZhyRa9QyiFbqbN92f4SphAbFUh3/Irs/2aoWkuQe4FcrdiARimf806et9URf79+2r4Z/8IHf5c2DNjQcbJOwwvk9gQyPuUpBtO8boUd1jBY4w4S+5pUxsFHLq8exSp/YkpaWW4S8mi+LyMeHiJRvaRNQweIs1dIMM2Ot5+pLhJFleD1lCB</div>
