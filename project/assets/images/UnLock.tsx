import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const UnLock = (props: any) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={100} height={100} fill="url(#pattern0_13_18)" />
    <Defs>
      <Pattern
        id="pattern0_13_18"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_13_18" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_13_18"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACC5JREFUeF7tnX+MHVUVx79ndkvq6lYpu/fOPhEIMQibiI0xoKBGaQ2JqBClaCLRxB/RGIwapVgR/BGFVlCJJv6BEDASjdo2CiSSSBES/BFB5Q//qNKQkmB7z7zdNVEIqH1z3FNfQ7Xb9+6buTNvdufe5P31zjn33O9n7ps3M/eeIcTWKAWoUdnEZBCBNOwgiEAikHIKzMzMnDU5OXmBiGwCMENEp4iIfhIAzxDRPwDsF5E/J0nye+fcHwAcLtdrfd6rYYYkxpiLiOgDADYDMCPK83cADxDRD9avX3/PgQMHnhvRv1bzxgKZnZ19UZIkVwH4MIAzQ6giIn8jou9MTEzccvDgwYUQMUPHaCIQMsZcSUQ7AHRCD7gf7xkAO6anp2/av3//Pyvqo1DYRgGZnZ19eZIk3wfw2kKjGdGJiP4iIu9n5t+O6FqZeWOAWGvfBkBhvKSy0a4c+N8isj3Lsm8AkJr7Pq67RgAxxlxPRF8ExnpddBszfxRAb5xQxg4kTdMvicj14xThaN9EtMc59+5x/k0eK5A0TbeJyM6CMBjAowBYRBYB5ET0AgCnEdG8iJxVMO4dzPzBcf18jQ2ItfY9AH44omiPE9HtvV5vT7fbfXyQr7XWENFbReRKABeN+HN4HTN/ZcTcgpiPBUiapmeIyGMAXuw5iidE5DNZlv20yJFrjHkVEX0VwCWe/fWIaItz7kFP+2Bm4wAyaa3VgV7oMQoRkZumpqa+EOIK2xjzLgDfJaKTh/UtIk+JyDndbvfpYbYhv68diLX24wC+5TGIp/UaIcuyPR623ib92flzAGcPcyKim51zVw+zC/l9rUCstS/UG38A0iGD0PtNlzDzAyEHezRWp9OZ6fV6DwGYHxJfr1HOzrLsiSryWClmrUDSNL1GRPSWyKCmP1Pv7J8vKtOh0+m8rNfr6b+0YTcrb2Xmj1SWyP8Frg3I/Pz8SYuLiwcBnDJkcLcw86fqEMAYczER6c/XIB30XtdpzJzVkVNtQObm5t6Y57n+TAxq+6anpzfVecPPWnsXgPcOyesTzOxz3ivNrDYg/aPxvkEZE9EVzrmflB7VCAHm5uZOz/Ncr2nWDXB7hJnPGyFsYdPagOiFGoCnBgz8MWZ+dZHrjMKj7zt6zBIhIuuc65bta5h/bUA0EWvtNwF8coWk9ELsLc65Xw5LuIrvmzR7awUCYMJa+3UA+iRwoi9uJiIfy7JsdxVie8bUi9UlANMnsq/rmqRuIEfGm6bprIicKyLPbdiw4dE6T+InEjxN0/tE5OIBAO9l5rd7Ai5sNhYghbOt0DFN05tF5NMDutjHzOdUmMKR0BFIX+E0Ta9aXk707QGCZ8xsI5CqFejHN8a8j4i+N6C7Z5l5qup04gx5foZsFZEfDxKcmSvXq/IOqj6iQsVP0zQCCSVmiDgRSAgVA8ZY60Am5ubmLhSRzXme66IDfQ7S9HYqgNcNSlJE7kyS5Eki2nvo0KFfV7FkKPg5xBhzWZIkO0us+mg6uCP56ep6Itq2fP/t7pAJhwSia3J3ElGtjzxDilEkloh8Lcuyz4a6KRoMiDHmOiL6cpFBrQGfa5n5hhDjCALEGHMuEf0RgG6aaWPL8zx/TbfbVQ1KtSBA0jTdrc/BS2Wyyp2JaLdz7vKywygNpL+xRh/crC+bzCr3fxbALDPr3pPCrTQQa63u5fhN4QzWkOPygonznXO/KzOkEEAuBaBLPGMDLmPmn5URojQQnyvcMgmuJt8QizQikIDEI5CAYoYIFYGEUDFgjAgkoJghQkUgIVQMGCMCCShmiFARSAgVA8aIQAKKGSJUBBJCxYAxIpCAYoYIFYGEUDFgjLYDWSCiXXme3w9At8ohSZKXisgWALr9eSag1l6h2gokB7Cz1+vduLCwoOX8jmsbN27csG7duu0AttX5FLONQHQD5lZmvsfnkLXWvgOAbpE7yce+rE3rgGjdRefcHaMIZ63VQjK3jeJT1LZtQB5k5jcXEctaq+cZLaBZaWsbkM1FKztYaxWGQqm0tQnIYn+zTNFqb7qHUOtrbaySSGuALJdKetg594YyYlprH/asQFS4m9YAAXA3M+tiisLNWquLD/RfV2WtTUB+xcyvL6OktVZXqw9c3V4mvvq2CchS/xxStIZ7PIeUPdpW8C/8L8sYs4WIflFBTv8Tsk0zRAf+EDO/qYio1tq9/UKYRdy9fdoGRIX5EDPf7q3Qf+uraDH/W0fxKWrbRiD/AnCF73JN3c1FRD+K97KKHmJ+frlWKj18+PANS0tL+m6Q45re7Z2cnPz88stdtFRGbXtW2jhDjhVf3/+xm4juz/P8r/pFkiSnHvM8ZFgpQT/8I1i1HcgIUtVjGoHUo7N3LxGIt1T1GEYg9ejs3UsE4i1VPYYRSD06e/cSgXhLVY9hBFKPzt69RCDeUtVjGIHUo7N3LxGIt1T1GEYg9ejs3UsjgFhrYyWH55GNv5KDtfZ8AI15l6z34VyBIRGd55x7pEzo0pUcOp3OVK/X02pAlRcZLjPQGnybUQ1IB5qm6S4R0T0ZrW0isivLsq1lBSg9QzQBa+0rAWg1taOvoCib12rz1yWum5j5T2UTDwKkD+VaAGN5XWlZEQL4b2fmYW+f8+omGBBduGeMuZGIrvHqee0Y7WDmzzWuKulRfXXXkpZOJaJXrB3NVxzJPgBXM/O9IccZcoYcm5dWtr6gX9n69FVS2dpHV30d7JMisrfb7WpZw6LbI07YV1VAfAYXbVZQIAJp2GERgUQgDVOgYenEGRKBNEyBhqUTZ0gE0jAFGpbOfwDZhbqSYMXpSgAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default UnLock;
