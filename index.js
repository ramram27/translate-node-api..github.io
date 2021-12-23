const translate = require('translate');


const translateStr = async (str, translateTostr) => {

  translate.engine = "google"; 
  translate.key = process.env.GOOGLE_KEY;
  
  const translate_str = await translate(str, translateTostr);
  
  console.log(translate_str);

}

translateStr('Hello','hi');

/*


Code	Name
af	Afrikaans
af-ZA	Afrikaans (South Africa)
ar	Arabic
ar-AE	Arabic (U.A.E.)
ar-BH	Arabic (Bahrain)
ar-DZ	Arabic (Algeria)
ar-EG	Arabic (Egypt)
ar-IQ	Arabic (Iraq)
ar-JO	Arabic (Jordan)
ar-KW	Arabic (Kuwait)
ar-LB	Arabic (Lebanon)
ar-LY	Arabic (Libya)
ar-MA	Arabic (Morocco)
ar-OM	Arabic (Oman)
ar-QA	Arabic (Qatar)
ar-SA	Arabic (Saudi Arabia)
ar-SY	Arabic (Syria)
ar-TN	Arabic (Tunisia)
ar-YE	Arabic (Yemen)
az	Azeri (Latin)
az-AZ	Azeri (Latin) (Azerbaijan)
az-AZ	Azeri (Cyrillic) (Azerbaijan)
be	Belarusian
be-BY	Belarusian (Belarus)
bg	Bulgarian
bg-BG	Bulgarian (Bulgaria)
bs-BA	Bosnian (Bosnia and Herzegovina)
ca	Catalan
ca-ES	Catalan (Spain)
cs	Czech
cs-CZ	Czech (Czech Republic)
cy	Welsh
cy-GB	Welsh (United Kingdom)
da	Danish
da-DK	Danish (Denmark)
de	German
de-AT	German (Austria)
de-CH	German (Switzerland)
de-DE	German (Germany)
de-LI	German (Liechtenstein)
de-LU	German (Luxembourg)
dv	Divehi
dv-MV	Divehi (Maldives)
el	Greek
el-GR	Greek (Greece)
en	English
en-AU	English (Australia)
en-BZ	English (Belize)
en-CA	English (Canada)
en-CB	English (Caribbean)
en-GB	English (United Kingdom)
en-IE	English (Ireland)
en-JM	English (Jamaica)
en-NZ	English (New Zealand)
en-PH	English (Republic of the Philippines)
en-TT	English (Trinidad and Tobago)
en-US	English (United States)
en-ZA	English (South Africa)
en-ZW	English (Zimbabwe)
eo	Esperanto
es	Spanish
es-AR	Spanish (Argentina)
es-BO	Spanish (Bolivia)
es-CL	Spanish (Chile)
es-CO	Spanish (Colombia)
es-CR	Spanish (Costa Rica)
es-DO	Spanish (Dominican Republic)
es-EC	Spanish (Ecuador)
es-ES	Spanish (Castilian)
es-ES	Spanish (Spain)
es-GT	Spanish (Guatemala)
es-HN	Spanish (Honduras)
es-MX	Spanish (Mexico)
es-NI	Spanish (Nicaragua)
es-PA	Spanish (Panama)
es-PE	Spanish (Peru)
es-PR	Spanish (Puerto Rico)
es-PY	Spanish (Paraguay)
es-SV	Spanish (El Salvador)
es-UY	Spanish (Uruguay)
es-VE	Spanish (Venezuela)
et	Estonian
et-EE	Estonian (Estonia)
eu	Basque
eu-ES	Basque (Spain)
fa	Farsi
fa-IR	Farsi (Iran)
fi	Finnish
fi-FI	Finnish (Finland)
fo	Faroese
fo-FO	Faroese (Faroe Islands)
fr	French
fr-BE	French (Belgium)
fr-CA	French (Canada)
fr-CH	French (Switzerland)
fr-FR	French (France)
fr-LU	French (Luxembourg)
fr-MC	French (Principality of Monaco)
gl	Galician
gl-ES	Galician (Spain)
gu	Gujarati
gu-IN	Gujarati (India)
he	Hebrew
he-IL	Hebrew (Israel)
hi	Hindi
hi-IN	Hindi (India)
hr	Croatian
hr-BA	Croatian (Bosnia and Herzegovina)
hr-HR	Croatian (Croatia)
hu	Hungarian
hu-HU	Hungarian (Hungary)
hy	Armenian
hy-AM	Armenian (Armenia)
id	Indonesian
id-ID	Indonesian (Indonesia)
is	Icelandic
is-IS	Icelandic (Iceland)
it	Italian
it-CH	Italian (Switzerland)
it-IT	Italian (Italy)
ja	Japanese
ja-JP	Japanese (Japan)
ka	Georgian
ka-GE	Georgian (Georgia)
kk	Kazakh
kk-KZ	Kazakh (Kazakhstan)
kn	Kannada
kn-IN	Kannada (India)
ko	Korean
ko-KR	Korean (Korea)
kok	Konkani
kok-IN	Konkani (India)
ky	Kyrgyz
ky-KG	Kyrgyz (Kyrgyzstan)
lt	Lithuanian
lt-LT	Lithuanian (Lithuania)
lv	Latvian
lv-LV	Latvian 

*/