<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
<h2> Comenzi </h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">ID comanda</th>
      <th style="text-align:left">Tip comanda</th>
      <th style="text-align:left">Luna livrare</th>
      <th style="text-align:left">Zi livrare</th>
      <th style="text-align:left">Ora livrare</th>
    </tr>
    <xsl:for-each select="firma/comenzi/comanda">
    <tr>
      <td><xsl:value-of select="IDcomanda"/></td>
      <td><xsl:value-of select="tipComanda"/></td>
      <td><xsl:value-of select="data/luna"/></td>
      <td><xsl:value-of select="data/zi"/></td>
      <td><xsl:value-of select="data/ora"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2> Colete </h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Numar</th>
      <th style="text-align:left">Tip</th>
      <th style="text-align:left">Greutate</th>
      <th style="text-align:left">Inaltime</th>
      <th style="text-align:left">Latime</th>
      <th style="text-align:left">Lungime</th>

    </tr>
    <xsl:for-each select="firma/comenzi/comanda">
    <tr>
      <td><xsl:value-of select="colet/IDcolet"/></td>
      <td><xsl:value-of select="tipColet"/></td>
      <td><xsl:value-of select="colet/greutate"/></td>
      <td><xsl:value-of select="colet/dimensiuni/inaltime"/></td>
      <td><xsl:value-of select="colet/dimensiuni/latime"/></td>
      <td><xsl:value-of select="colet/dimensiuni/lungime"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2> Destinatari </h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Nume</th>
      <th style="text-align:left">Prenume</th>
      <th style="text-align:left">Telefon</th>
      <th style="text-align:left">Judet</th>
      <th style="text-align:left">Oras</th>
      <th style="text-align:left">Strada</th>
      <th style="text-align:left">Numar</th>
      <th style="text-align:left">Bloc</th>
      <th style="text-align:left">Apartament</th>
    </tr>
    <xsl:for-each select="firma/comenzi/comanda">
    <tr>
      <td><xsl:value-of select="colet/destinatar/nume"/></td>
      <td><xsl:value-of select="colet/destinatar/prenume"/></td>
      <td><xsl:value-of select="colet/destinatar/telefon"/></td>
      <td><xsl:value-of select="colet/destinatar/adresa/judet"/></td>
      <td><xsl:value-of select="colet/destinatar/adresa/oras"/></td>
      <td><xsl:value-of select="colet/destinatar/adresa/strada"/></td>
      <td><xsl:value-of select="colet/destinatar/adresa/numar"/></td>
      <td><xsl:value-of select="colet/destinatar/adresa/bloc"/></td>
      <td><xsl:value-of select="colet/destinatar/adresa/apartament"/></td>

    </tr>
    </xsl:for-each>
  </table>

  <h2> Expeditori </h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Nume</th>
      <th style="text-align:left">Prenume</th>
      <th style="text-align:left">Telefon</th>
      <th style="text-align:left">Judet</th>
      <th style="text-align:left">Oras</th>
      <th style="text-align:left">Strada</th>
      <th style="text-align:left">Numar</th>
      <th style="text-align:left">Bloc</th>
      <th style="text-align:left">Apartament</th>
    </tr>
    <xsl:for-each select="firma/comenzi/comanda">
    <tr>
      <td><xsl:value-of select="colet/expeditor/nume"/></td>
      <td><xsl:value-of select="colet/expeditor/prenume"/></td>
      <td><xsl:value-of select="colet/expeditor/telefon"/></td>
      <td><xsl:value-of select="colet/expeditor/adresa/judet"/></td>
      <td><xsl:value-of select="colet/expeditor/adresa/oras"/></td>
      <td><xsl:value-of select="colet/expeditor/adresa/strada"/></td>
      <td><xsl:value-of select="colet/expeditor/adresa/numar"/></td>
      <td><xsl:value-of select="colet/expeditor/adresa/bloc"/></td>
      <td><xsl:value-of select="colet/expeditor/adresa/apartament"/></td>

    </tr>
    </xsl:for-each>
  </table>

<h2> Curieri </h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">ID curier</th>
      <th style="text-align:left">Nume</th>
      <th style="text-align:left">Prenume</th>
      <th style="text-align:left">Telefon</th>
      <th style="text-align:left">Marca masina</th>
      <th style="text-align:left">Model</th>
      <th style="text-align:left">Nr. Inmatriculare</th>
      <th style="text-align:left">Tip masina</th>
      <th style="text-align:left">An</th>
      <th style="text-align:left">Culoare</th>
    </tr>
    <xsl:for-each select="firma/comenzi/comanda">
    <tr>
      <td><xsl:value-of select="curier/IDcurier"/></td>
      <td><xsl:value-of select="curier/nume"/></td>
      <td><xsl:value-of select="curier/prenume"/></td>
      <td><xsl:value-of select="curier/telefon"/></td>
      <td><xsl:value-of select="curier/masina/marca"/></td>
      <td><xsl:value-of select="curier/masina/model"/></td>
      <td><xsl:value-of select="curier/masina/numarInmatriculare"/></td>
      <td><xsl:value-of select="curier/masina/tipMasina"/></td>
      <td><xsl:value-of select="curier/masina/an"/></td>
      <td><xsl:value-of select="curier/masina/culoare"/></td>
    </tr>
    </xsl:for-each>
  </table>


</body>
</html>
</xsl:template>
</xsl:stylesheet>

