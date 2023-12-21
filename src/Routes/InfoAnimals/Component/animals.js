import Ayuda1 from '../../../assets/InfoAnimals/Ayuda1.png'
import Ayuda2 from '../../../assets/InfoAnimals/Ayuda2.png'

import AnimalVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/VaquitaMarina.png'
import WorldMapVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/WorldMap1.png'
import Amenazas1VaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Amenazas0.png'
import Amenazas2VaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Amenazas1.png'

import AnimalJaguar from '../../../assets/InfoAnimals/Jaguar/Jaguar.png'
import WorldMapJaguar from '../../../assets/InfoAnimals/Jaguar/WorldMap2.png'
import Amenazas1Jaguar from '../../../assets/InfoAnimals/Jaguar/Amenazas2.png'
import Amenazas2Jaguar from '../../../assets/InfoAnimals/Jaguar/Amenazas3.png'

import AnimalManati from '../../../assets/InfoAnimals/ManatiDelCaribe/ManatiDelCaribe.png'
import WorldMapManati from '../../../assets/InfoAnimals/ManatiDelCaribe/WorldMap3.png'
import Amenazas1Manati from '../../../assets/InfoAnimals/ManatiDelCaribe/Amenazas4.png'
import Amenazas2Manati from '../../../assets/InfoAnimals/ManatiDelCaribe/Amenazas5.png'

import AnimalOso from '../../../assets/InfoAnimals/OsoDeAnteojos/OsoDeAntejos.png'
import WorldMapOso from '../../../assets/InfoAnimals/OsoDeAnteojos/WorldMap4.png'
import Amenazas1Oso from '../../../assets/InfoAnimals/OsoDeAnteojos/Amenazas6.png'
import Amenazas2Oso from '../../../assets/InfoAnimals/OsoDeAnteojos/Amenazas7.png'

import AnimalMono from '../../../assets/InfoAnimals/MonoAraña/MonoAraña.png'
import WorldMapMono from '../../../assets/InfoAnimals/MonoAraña/WorldMap5.png'
import Amenazas1Mono from '../../../assets/InfoAnimals/MonoAraña/Amenazas8.png'
import Amenazas2Mono from '../../../assets/InfoAnimals/MonoAraña/Amenazas9.png'

import AnimalTortuga from '../../../assets/InfoAnimals/TortugaCarey/TortugaCarey.png'
import WorldMapTortuga from '../../../assets/InfoAnimals/TortugaCarey/WorldMap6.png'
import Amenazas1Tortuga from '../../../assets/InfoAnimals/TortugaCarey/Amenazas10.png'
import Amenazas2Tortuga from '../../../assets/InfoAnimals/TortugaCarey/Amenazas11.png'

import AnimalGuara from '../../../assets/InfoAnimals/AguaraGuazu/AguaraGuazu.png'
import WorldMapGuara from '../../../assets/InfoAnimals/AguaraGuazu/WorldMap7.png'
import Amenazas1Guara from '../../../assets/InfoAnimals/AguaraGuazu/Amenazas12.png'
import Amenazas2Guara from '../../../assets/InfoAnimals/AguaraGuazu/Amenazas13.png'

import AnimalAjolote from '../../../assets/InfoAnimals/Ajolote/Ajolote.png'
import WorldMapAjolote from '../../../assets/InfoAnimals/Ajolote/WorldMap8.png'
import Amenazas1Ajolote from '../../../assets/InfoAnimals/Ajolote/Amenazas14.png'
import Amenazas2Ajolote from '../../../assets/InfoAnimals/Ajolote/Amenazas15.png'

import AnimalTapir from '../../../assets/InfoAnimals/TapirDeBaird/TapirDeBaird.png'
import WorldMapTapir from '../../../assets/InfoAnimals/TapirDeBaird/WorldMap9.png'
import Amenazas1Tapir from '../../../assets/InfoAnimals/TapirDeBaird/Amenazas16.png'
import Amenazas2Tapir from '../../../assets/InfoAnimals/TapirDeBaird/Amenazas17.png'

import AnimalHuemul from '../../../assets/InfoAnimals/Huemul/Huemul.png'
import WorldMapHuemul from '../../../assets/InfoAnimals/Huemul/WorldMap10.png'
import Amenazas1Huemul from '../../../assets/InfoAnimals/Huemul/Amenazas18.png'
import Amenazas2Huemul from '../../../assets/InfoAnimals/Huemul/Amenazas19.png'

import AnimalTatu from '../../../assets/InfoAnimals/TatuGigante/TatuGigante.png'
import WorldMapTatu from '../../../assets/InfoAnimals/TatuGigante/WorldMap11.png'
import Amenazas1Tatu from '../../../assets/InfoAnimals/TatuGigante/Amenazas20.png'
import Amenazas2Tatu from '../../../assets/InfoAnimals/TatuGigante/Amenazas21.png'

import AnimalCardenal from '../../../assets/InfoAnimals/CardenalAmarillo/CardenalAmarillo.png'
import WorldMapCardenal from '../../../assets/InfoAnimals/CardenalAmarillo/WorldMap12.png'
import Amenazas1Cardenal from '../../../assets/InfoAnimals/CardenalAmarillo/Amenazas22.png'
import Amenazas2Cardenal from '../../../assets/InfoAnimals/CardenalAmarillo/Amenazas23.png'

import AnimalHormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/OsoHormigueroGigante.png'
import WorldMapHormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/WorldMap13.png'
import Amenazas1Hormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/Amenazas24.png'
import Amenazas2Hormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/Amenazas25.png'

export function getAnimal (animal) {
  switch (animal) {
    case 'vaquitaMarina':
      return {
        Animal: AnimalVaquitaMarina,
        WorldMap1: WorldMapVaquitaMarina,
        Amenazas1: Amenazas1VaquitaMarina,
        Amenazas2: Amenazas2VaquitaMarina,
        Ayuda1,
        Ayuda2,
        Texto1: 'La vaquita marina es una pequeña y escurridiza marsopa que habita en el Golfo de California, México. Conocida por su distintivo aspecto, caracterizado por manchas oscuras alrededor de los ojos y los labios, la vaquita es reconocida como el cetáceo más pequeño del mundo. Lamentablemente, también es uno de los mamíferos marinos más amenazados. Su comportamiento tímido se manifiesta en su reacción cautelosa ante embarcaciones y otros estímulos externos. Con una dieta que probablemente consiste en peces y calamares adaptados a su entorno marino específico, la vaquita se desplaza en grupos pequeños, asociándose con áreas ricas en alimentos.Aunque los detalles sobre su comunicación y reproducción son limitados, se cree que utilizan sonidos para la comunicación y que las hembras dan a luz crías. La vaquita enfrenta amenazas críticas que la colocan al borde de la extinción. Nuestros esfuerzos de conservación se centran en proteger su hábitat y mitigar las amenazas humanas para garantizar la supervivencia de esta especie única y esquiva.',
        Logo1: 'CR',
        Texto2: 'En Peligro',
        Texto3: 'Phocoena sinus',
        Texto4: 'Aproximandamente 10 individuos',
        Texto5: '45 kg',
        Texto6: '1,5 mts de longitud',
        Texto7: 'Marino (Golfo de California, México)',
        Texto8: 'La vaquita marina enfrenta una serie de amenazas críticas que ponen en peligro su supervivencia. La principal amenaza es la pesca ilegal de totoaba, donde las vaquitas quedan atrapadas en las redes destinadas a capturar estos peces. Este comercio ilegal, impulsado por la demanda de la vejiga natatoria de totoaba en el mercado asiático, ha llevado a una disminución drástica de la población de vaquitas. Además, la pérdida de hábitat, la contaminación y el riesgo de colisiones con embarcaciones contribuyen a su vulnerabilidad. Aunque se han implementado medidas de conservación, la crítica situación de la vaquita marina destaca la necesidad urgente de acciones coordinadas a nivel nacional e internacional para proteger este pequeño cetáceo y preservar su hábitat único en el Golfo de California.'
      }
    case 'jaguar':
      return {
        Animal: AnimalJaguar,
        WorldMap1: WorldMapJaguar,
        Amenazas1: Amenazas1Jaguar,
        Amenazas2: Amenazas2Jaguar,
        Ayuda1,
        Ayuda2,
        Texto1: 'El jaguar (Panthera onca) es un felino majestuoso que habita en las densas selvas, bosques y pastizales de América Latina. Caracterizado por su robusto cuerpo, patas cortas y cabeza poderosa, el jaguar es el tercer felino más grande del mundo, después del tigre y el león. Su pelaje es corto y denso, generalmente de color amarillo dorado con manchas negras en forma de rosetas, lo que le proporciona un camuflaje perfecto en su entorno selvático. Hábil nadador y trepador, el jaguar se adapta a una variedad de hábitats, desde humedales hasta montañas. Sus poderosas mandíbulas y colmillos le permiten una mordida extremadamente fuerte, y es conocido por su capacidad para atrapar y cargar presas mucho más grandes que él mismo. Su dieta incluye una amplia gama de animales, desde capibaras y tapires hasta caimanes y ciervos. Los jaguares son animales solitarios y territoriales, marcando su área con secreciones y rasguños en árboles. Son más activos durante la noche y el crepúsculo, cazando principalmente en solitario. Estos felinos son esenciales para el equilibrio de los ecosistemas, regulando las poblaciones de presas y ayudando a mantener la salud de los bosques y selvas. Aunque el jaguar es un depredador formidable, enfrenta amenazas significativas, como la pérdida de hábitat debido a la deforestación y la expansión agrícola, la caza furtiva y los conflictos con comunidades humanas. La conservación del jaguar no solo es vital para su supervivencia como especie, sino también para la preservación de los ecosistemas tropicales que habita y la diversidad biológica que sostiene.',
        Logo1: 'NT',
        Texto2: 'Casi Amenazado',
        Texto3: 'Panthera onca',
        Texto4: '64.000 a 173.000',
        Texto5: '56 a 96 kg',
        Texto6: '1,1 a 1,8 mts de longitud',
        Texto7: 'Selvas tropicales, Bosques, Humedales y Montañas',
        Texto8: 'El jaguar, clasificado como "Casi Amenazado" por la UICN, enfrenta múltiples amenazas en América Latina. La pérdida de hábitat debido a la deforestación y la expansión humana, los conflictos con comunidades por ataques al ganado, la caza furtiva y la captura accidental, así como la disminución de las poblaciones de presas y la fragmentación de corredores ecológicos, son factores que ponen en riesgo a esta especie emblemática. Además, el cambio climático agrega presiones adicionales. La conservación del jaguar requiere esfuerzos coordinados para proteger su hábitat, mitigar conflictos con humanos y promover prácticas sostenibles, garantizando así su papel vital en la biodiversidad y salud de los ecosistemas donde habita.'
      }
    case 'manati':
      return {
        Animal: AnimalManati,
        WorldMap1: WorldMapManati,
        Amenazas1: Amenazas1Manati,
        Amenazas2: Amenazas2Manati,
        Ayuda1,
        Ayuda2,
        Texto1: 'El manatí del Caribe es una criatura fascinante que habita las cálidas aguas costeras de América Latina. Con su cuerpo robusto y aletas en forma de paleta, estos mamíferos marinos se desplazan con una gracia serena. Su piel rugosa, grisácea o marrón, esconde una capa de vello que les proporciona cierta protección. Los manatíes del Caribe son conocidos por su naturaleza apacible y su comportamiento tranquilo. Prefieren áreas de aguas someras, como estuarios, manglares y áreas costeras, donde se alimentan de una dieta principalmente herbívora, compuesta por plantas acuáticas. Su comportamiento pacífico se refleja en su interacción social, ya que a menudo se encuentran en grupos, especialmente durante la reproducción y el cuidado de las crías. Estos gentiles gigantes son nadadores lentos pero ágiles, utilizando sus aletas para moverse y manipular objetos en su entorno. La comunicación entre ellos se realiza a través de sonidos suaves y vocalizaciones. Aunque han coexistido con las comunidades costeras durante siglos, la supervivencia de los manatíes del Caribe enfrenta desafíos como la pérdida de hábitat, la colisión con embarcaciones y la contaminación. Su conservación depende de la protección de sus áreas de alimentación y descanso, así como de medidas para reducir los impactos humanos negativos en su hábitat marino',
        Logo1: 'VU',
        Texto2: 'Vulnerable',
        Texto3: 'Trichechus manatus',
        Texto4: 'Aproximadamente 3.300',
        Texto5: '400 a 600 kg',
        Texto6: '3 a 4 mts de longitud',
        Texto7: 'Estuarios, Manglares, Áreas costeras, Ríos y canales.',
        Texto8: 'Los manatíes del Caribe enfrentan múltiples amenazas que ponen en peligro su supervivencia. La pérdida de hábitat debido a la degradación de manglares y la canalización de ríos, junto con la contaminación del agua, representan desafíos significativos. Las colisiones con embarcaciones, la caza ilegal, cambios climáticos y enfermedades también afectan su bienestar. La conservación efectiva requiere acciones coordinadas, como la protección de hábitats clave, regulaciones para reducir colisiones, esfuerzos contra la caza furtiva y programas educativos para aumentar la conciencia sobre la importancia de preservar esta especie vulnerable.'
      }
    case 'oso':
      return {
        Animal: AnimalOso,
        WorldMap1: WorldMapOso,
        Amenazas1: Amenazas1Oso,
        Amenazas2: Amenazas2Oso,
        Ayuda1,
        Ayuda2,
        Texto1: 'El oso de anteojos, nativo de los Andes de América del Sur, es una especie distintiva conocida por su pelaje oscuro y las manchas características alrededor de sus ojos, que le dan la apariencia de llevar anteojos. Con un hábitat que abarca desde bosques nubosos hasta páramos de gran altitud, este oso es adaptativo y versátil en sus elecciones de hábitat. Los osos de anteojos son omnívoros, consumiendo frutas, vegetación, insectos y ocasionalmente pequeños mamíferos. Su habilidad para trepar árboles les permite acceder a alimentos en alturas, y su comportamiento solitario, aunque a veces interactúan socialmente, refleja una adaptación a diversas condiciones de vida. Aunque son esenciales para el equilibrio ecológico, enfrentan amenazas significativas, como la pérdida de hábitat y la caza ilegal, subrayando la necesidad de esfuerzos de conservación para proteger a este icónico habitante de los Andes.',
        Logo1: 'VU',
        Texto2: 'Vulnerable',
        Texto3: 'Tremarctos ornatus',
        Texto4: '2.500 a 10.000',
        Texto5: '70 a 150 kg',
        Texto6: '1,2 a 1,8 mts de longitud',
        Texto7: 'Bosques, Páramos y Selvas tropicales.',
        Texto8: 'El oso de anteojos enfrenta una serie de amenazas que comprometen su supervivencia en los Andes de América del Sur. La pérdida y degradación de su hábitat debido a la deforestación y actividades humanas, junto con la caza ilegal por trofeos y la captura de crías, son desafíos críticos. Los conflictos con humanos se intensifican a medida que las poblaciones se expanden y se enfrentan a la competencia por recursos, resultando en retaliaciones y persecuciones. La expansión de infraestructuras y los cambios climáticos añaden presiones adicionales, fragmentando hábitats y modificando patrones de distribución. Para preservar esta especie única y emblemática, es imperativo implementar estrategias de conservación integrales que aborden estas amenazas, promoviendo la coexistencia pacífica entre osos y comunidades locales, protegiendo hábitats cruciales y combatiendo la caza furtiva y la deforestación.'
      }
    case 'mono':
      return {
        Animal: AnimalMono,
        WorldMap1: WorldMapMono,
        Amenazas1: Amenazas1Mono,
        Amenazas2: Amenazas2Mono,
        Ayuda1,
        Ayuda2,
        Texto1: 'El mono araña de frente roja es una especie de primate que se distingue por su pelaje predominantemente negro y una característica mancha facial roja intensa. Estos primates, adaptados para la vida arbórea, se encuentran en las selvas tropicales de América del Sur, abarcando áreas de Bolivia, Brasil y Paraguay. Dotados de extremidades largas y una cola prensil, los monos araña de frente roja son expertos trepadores, desplazándose con agilidad por el dosel forestal. Viven en grupos sociales, liderados por hembras, y su dieta es principalmente vegetariana, compuesta por frutas, hojas y flores. La reproducción ocurre durante todo el año, y las hembras dan a luz a una sola cría después de un período de gestación de alrededor de 226 días. Sin embargo, esta especie se enfrenta a amenazas significativas, como la pérdida de hábitat debido a la deforestación y la caza, lo que destaca la importancia de esfuerzos de conservación para garantizar su supervivencia.',
        Logo1: 'EN',
        Texto2: 'En peligro',
        Texto3: 'Ateles chamek',
        Texto4: 'Desconocida',
        Texto5: '6 a 9 kg',
        Texto6: '75 a 90 cm de longitud',
        Texto7: '',
        Texto8: 'El mono araña de frente roja enfrenta amenazas significativas que ponen en riesgo su supervivencia en América del Sur. La pérdida de hábitat debido a la deforestación y la expansión agrícola, junto con la caza ilegal para el comercio de mascotas y la fragmentación del hábitat, representan los principales desafíos. Además, el impacto del cambio climático y la posible transmisión de enfermedades desde humanos y ganado también afectan a estas poblaciones. La conservación exitosa de esta especie requiere medidas integrales, como la protección de áreas boscosas críticas, la implementación de leyes contra la caza ilegal y la promoción de prácticas sostenibles para la coexistencia pacífica entre comunidades humanas y estos primates.'
      }
    case 'tortuga':
      return {
        Animal: AnimalTortuga,
        WorldMap1: WorldMapTortuga,
        Amenazas1: Amenazas1Tortuga,
        Amenazas2: Amenazas2Tortuga,
        Ayuda1,
        Ayuda2,
        Texto1: 'La tortuga carey es una especie fascinante que se distingue por su caparazón colorido y su presencia en los océanos tropicales y subtropicales de todo el mundo. Esta especie, de tamaño mediano, presenta un caparazón caracterizado por su mezcla de colores, que van desde el amarillo y el naranja hasta el marrón. La tortuga carey es conocida por su dieta omnívora, que incluye esponjas marinas, medusas, crustáceos y diversos tipos de invertebrados. Su hábitat abarca arrecifes de coral, lagunas y zonas costeras, donde se sumerge en busca de alimento y lugares para anidar. Estas tortugas son migratorias y pueden recorrer largas distancias entre áreas de alimentación y sitios de anidación. A pesar de su belleza, la tortuga carey se enfrenta a amenazas significativas, como la pérdida de hábitat, la pesca incidental y el comercio ilegal de caparazones, lo que subraya la importancia de los esfuerzos de conservación para garantizar su supervivencia y proteger los ecosistemas marinos.',
        Logo1: 'CN',
        Texto2: 'Peligro crítico',
        Texto3: 'Eretmochelys imbricata',
        Texto4: 'Desconocida',
        Texto5: '40 a 70 kg',
        Texto6: '70 a 90 cm de longitud',
        Texto7: 'Arrecifes de coral y Aguas costeras.',
        Texto8: 'La tortuga carey se enfrenta a una serie de amenazas que comprometen su existencia. La pérdida y degradación de su hábitat, que incluye arrecifes de coral y áreas de anidación en playas, debido a la urbanización y la contaminación, plantea un riesgo significativo. Además, la caza furtiva persistente por su carne, caparazones y huevos, así como el comercio ilegal de productos de concha, contribuyen a la disminución de sus poblaciones. La pesca incidental, cambios climáticos y la contaminación del océano, especialmente por desechos plásticos, añaden presiones adicionales. Para garantizar la supervivencia de la tortuga carey, es esencial implementar medidas integrales que aborden estas amenazas, protejan sus hábitats críticos y promuevan la coexistencia sostenible entre las comunidades locales y estas especies icónicas de los océanos.'
      }
    case 'guara':
      return {
        Animal: AnimalGuara,
        WorldMap1: WorldMapGuara,
        Amenazas1: Amenazas1Guara,
        Amenazas2: Amenazas2Guara,
        Ayuda1,
        Ayuda2,
        Texto1: 'El aguará guazú es un cánido nativo de América del Sur que destaca por su singular apariencia y su comportamiento adaptativo. Su pelaje rojizo, sus patas largas y su cola tupida lo distinguen en los ambientes abiertos de pastizales y sabanas, aunque también puede adaptarse a otros hábitats. Este cánido es principalmente crepuscular y nocturno, mostrando mayor actividad durante la noche para cazar presas como roedores, aves e insectos. Aguará guazú es solitario y territorial, prefiriendo áreas con suficiente cobertura para camuflarse y emboscar a sus presas. Durante la época reproductiva, que se da entre marzo y julio, las hembras construyen o utilizan madrigueras para dar a luz a camadas pequeñas. A pesar de su capacidad de adaptación, el aguará guazú enfrenta amenazas considerables, incluida la pérdida de hábitat debido a la expansión agrícola y la caza furtiva. La conservación efectiva de esta especie requiere esfuerzos coordinados para proteger sus hábitats, implementar medidas que mitiguen las amenazas humanas y promover la coexistencia sostenible entre las comunidades locales y este emblemático cánido de la región sudamericana.',
        Logo1: 'VU',
        Texto2: 'Vulnerable',
        Texto3: 'Chrysocyon brachyurus',
        Texto4: '17.000',
        Texto5: '20 a 30 kg',
        Texto6: '85 a 105 cm de longitud',
        Texto7: 'Pastizales y sabanas.',
        Texto8: 'El aguará guazú, enfrentando diversas amenazas, ve comprometida su supervivencia en las llanuras sudamericanas. La pérdida y degradación del hábitat debido a la expansión agrícola y la urbanización, la caza furtiva por su piel y carne, así como los atropellamientos en carreteras, representan desafíos críticos. Además, la interacción con perros domésticos y la fragmentación del hábitat aumentan la presión sobre estas poblaciones. Los cambios climáticos añaden incertidumbre al afectar los patrones ambientales. La conservación eficaz demanda la implementación de estrategias integrales que aborden estas amenazas, promuevan la coexistencia pacífica con las comunidades locales y protejan los hábitats esenciales del aguará guazú, contribuyendo así a la preservación de esta especie única en peligro.'
      }
    case 'ajolote':
      return {
        Animal: AnimalAjolote,
        WorldMap1: WorldMapAjolote,
        Amenazas1: Amenazas1Ajolote,
        Amenazas2: Amenazas2Ajolote,
        Ayuda1,
        Ayuda2,
        Texto1: 'El ajolote es una especie fascinante de salamandra que encuentra su hogar en los cuerpos de agua dulce de México, particularmente en lagos y canales. Con su aspecto distintivo que incluye branquias externas y una cola ancha y aplanada, el ajolote mantiene una singularidad al conservar características larvales a lo largo de su vida acuática, a diferencia de otras salamandras que experimentan una metamorfosis completa. Su verdadera notoriedad radica en su extraordinaria capacidad de regeneración, siendo capaz de recuperar extremidades, órganos e incluso partes del cerebro. Este anfibio se alimenta principalmente de pequeños invertebrados y larvas, contribuyendo a mantener el equilibrio ecológico en su hábitat acuático. A pesar de sus asombrosas habilidades, la población de ajolotes se ha visto amenazada por factores como la pérdida de hábitat y la contaminación, subrayando la urgencia de implementar medidas de conservación para asegurar la supervivencia de esta especie única y emblemática de México.',
        Logo1: 'CR',
        Texto2: 'Peligro crítico',
        Texto3: 'Ambystoma mexicanum',
        Texto4: '50 a 1000 individuos',
        Texto5: '150 a 300 gr',
        Texto6: '15 a 45 cm de longitud',
        Texto7: 'Cuerpos de agua dulce.',
        Texto8: 'El ajolote, habitante icónico de los cuerpos de agua dulce en México, enfrenta una serie de amenazas que han resultado en la disminución de sus poblaciones en la naturaleza. La urbanización y la expansión agrícola han llevado a la pérdida y degradación de sus hábitats acuáticos, mientras que la contaminación del agua, generada por diversas fuentes, compromete la calidad de los ambientes en los que reside. La introducción de especies exóticas y el cambio climático también inciden en sus poblaciones. A esta lista se suma la captura no regulada para el comercio de mascotas, a pesar de los avances en la cría en cautiverio. En conjunto, estas amenazas han colocado al ajolote en la categoría de peligro de extinción en su hábitat natural. Los esfuerzos de conservación se centran en abordar estas problemáticas, preservar los hábitats críticos y fomentar programas de cría en cautiverio para garantizar la supervivencia a largo plazo de esta especie única y fascinante.'
      }
    case 'tapir':
      return {
        Animal: AnimalTapir,
        WorldMap1: WorldMapTapir,
        Amenazas1: Amenazas1Tapir,
        Amenazas2: Amenazas2Tapir,
        Ayuda1,
        Ayuda2,
        Texto1: 'El tapir de Baird, conocido también como danto, es la especie de tapir más grande y se encuentra en América Central y América del Sur. Caracterizado por un cuerpo robusto y una trompa prensil distintiva, este tapir habita principalmente en entornos húmedos como selvas tropicales y bosques nublados, aunque también se adapta a sabanas y pantanos. Su dieta herbívora incluye frutas, hojas y brotes, y su trompa les permite acceder a alimentos tanto en tierra como en el agua. De hábitos nocturnos y solitarios, los tapires de Baird son buenos nadadores y muestran comportamientos protectores hacia sus crías. Sin embargo, enfrentan amenazas como la pérdida de hábitat y la caza furtiva, lo que subraya la importancia de esfuerzos de conservación para preservar esta especie.',
        Logo1: 'EN',
        Texto2: 'En peligro',
        Texto3: 'Tapirus bairdii',
        Texto4: '1000 a 1500 individuos',
        Texto5: 'Entre 200 y 400 kg',
        Texto6: 'Hasta 2,5 mts de longitud',
        Texto7: 'Sabanas y bosques.',
        Texto8: 'El tapir de Baird enfrenta diversas amenazas que ponen en peligro su supervivencia y estado de conservación. La pérdida de hábitat debido a la deforestación y la conversión de áreas naturales para actividades humanas, como la agricultura y la urbanización, representa una de las mayores preocupaciones. La caza furtiva también impacta significativamente a estas especies, ya que son cazadas por su carne y otras partes utilizadas en prácticas de medicina tradicional. La fragmentación del hábitat, causada por infraestructuras como carreteras, contribuye a aislar poblaciones y dificulta la conectividad entre ellas. Además, los tapires de Baird enfrentan conflictos con humanos, especialmente en áreas donde suelen entrar en terrenos cultivados en busca de alimentos, lo que puede resultar en enfrentamientos perjudiciales. El cambio climático agrega una capa adicional de presión al afectar la disponibilidad de alimentos y agua, así como al aumentar la incidencia de enfermedades. La conservación efectiva de los tapires de Baird requiere enfoques integrales que aborden estas amenazas, incluyendo la protección de hábitats, medidas para combatir la caza furtiva, la planificación del uso del suelo sostenible y la concientización pública sobre la importancia crucial de preservar esta especie y su papel fundamental en los ecosistemas.'
      }
    case 'huemul':
      return {
        Animal: AnimalHuemul,
        WorldMap1: WorldMapHuemul,
        Amenazas1: Amenazas1Huemul,
        Amenazas2: Amenazas2Huemul,
        Ayuda1,
        Ayuda2,
        Texto1: 'El huemul, ciervo endémico de los Andes, se distingue por su gracia y cuernas ramificadas, siendo un tesoro de la biodiversidad sudamericana. Este majestuoso herbívoro habita en áreas montañosas y bosques de la región, siendo su hábitat caracterizado por la presencia de lagos y ríos de aguas frías y cristalinas. Su presencia es indicativa de ecosistemas saludables y equilibrados. El huemul, sin embargo, enfrenta amenazas significativas, principalmente la pérdida de hábitat debido a la expansión humana y la deforestación, así como la caza furtiva. Estos desafíos han llevado a que esta especie sea catalogada como vulnerable. La conservación del huemul se vuelve esencial no solo para salvaguardar la integridad de este majestuoso ciervo, sino también para mantener la salud de los ecosistemas andinos. Es imperativo implementar medidas de protección de hábitat, promover prácticas sostenibles y concientizar sobre la importancia de preservar esta especie emblemática y su hogar natural en los Andes.',
        Logo1: 'EN',
        Texto2: 'En peligro',
        Texto3: 'Hippocamelus bisulcus',
        Texto4: '1000 a 1500 individuos',
        Texto5: '40 a 100 Kg',
        Texto6: '1,80 a 2 de longitud',
        Texto7: 'Sabanas y pastizales',
        Texto8: 'El huemul, icónico habitante de los Andes, enfrenta una serie de amenazas que ponen en peligro su existencia. La pérdida de hábitat debido a la expansión humana y la deforestación, la caza furtiva impulsada por la demanda de trofeos, la fragmentación de su hábitat debido a infraestructuras en desarrollo, la amenaza de enfermedades transmitidas por el ganado y el impacto del cambio climático, todo contribuye a la vulnerabilidad de esta especie. El huemul requiere esfuerzos concertados de conservación que aborden estas amenazas de manera integral. La protección de sus hábitats naturales, medidas efectivas contra la caza furtiva y la concientización sobre la importancia de preservar esta especie única son esenciales para asegurar el futuro del huemul y su papel vital en los ecosistemas de los Andes.'
      }
    case 'tatu':
      return {
        Animal: AnimalTatu,
        WorldMap1: WorldMapTatu,
        Amenazas1: Amenazas1Tatu,
        Amenazas2: Amenazas2Tatu,
        Ayuda1,
        Ayuda2,
        Texto1: 'El tatu gigante, también conocido como tatu-canastra, emerge como una figura imponente entre los armadillos de América del Sur. Este mamífero, que ostenta el título del armadillo más grande, se distingue por su caparazón oscuro y su cola robusta. Con una longitud que puede alcanzar hasta 1,5 metros y un peso que supera los 50 kilogramos, el tatu gigante elige hábitats de sabanas, pastizales y bosques secos en una amplia extensión que se extiende desde Brasil hasta Argentina. Sus características incluyen un hocico largo y afilado, ideal para excavar madrigueras profundas donde busca insectos y otros invertebrados que constituyen su dieta principal. Estas excavaciones, que pueden alcanzar hasta 5 metros de longitud, sirven tanto como refugio contra depredadores como para descansar y reproducirse. Mayormente activo durante la noche para evitar el calor diurno, el tatu gigante enfrenta desafíos de conservación relacionados con la pérdida de hábitat debido a la expansión agrícola y la urbanización. Proteger sus entornos naturales y fomentar la coexistencia armoniosa con esta especie única son esenciales para su preservación a largo plazo en los ecosistemas sudamericanos.',
        Logo1: 'VU',
        Texto2: 'Vulnerable',
        Texto3: 'Priodontes maximus',
        Texto4: 'En descenso',
        Texto5: 'Hasta 50 Kg',
        Texto6: '1,5 mts de longitud',
        Texto7: 'Sabanas y pastizales',
        Texto8: 'El tatu gigante  enfrenta diversas amenazas que impactan su supervivencia y contribuyen a su clasificación como "Vulnerable" en la Lista Roja de la UICN. Entre las principales amenazas se encuentran la pérdida de hábitat debido a la expansión agrícola y la deforestación, la caza furtiva por su carne y partes del cuerpo, así como la presión derivada de conflictos con humanos. Estas amenazas combinadas afectan negativamente a las poblaciones de tatu gigante, subrayando la importancia de implementar medidas de conservación que aborden la protección de su hábitat, la regulación de la caza y la promoción de la coexistencia armoniosa con las comunidades humanas.'
      }
    case 'cardenal':
      return {
        Animal: AnimalCardenal,
        WorldMap1: WorldMapCardenal,
        Amenazas1: Amenazas1Cardenal,
        Amenazas2: Amenazas2Cardenal,
        Ayuda1,
        Ayuda2,
        Texto1: 'El cardenal amarillo, deslumbra con su plumaje vibrante, siendo los machos los protagonistas de un amarillo intenso en la cabeza y el pecho, contrastado por alas y cola de tonalidades oscuras. Esta especie endémica de América del Sur, especialmente presente en Argentina, Paraguay y Uruguay, prefiere habitar en hábitats abiertos como pastizales y áreas de arbustos, adaptándose incluso a zonas semiáridas. Su dieta versátil abarca desde semillas y frutas hasta insectos, permitiéndole sobrevivir en diversos entornos. Sociable por naturaleza, se le encuentra a menudo en grupos, y durante la temporada de reproducción, los machos despliegan comportamientos de cortejo para atraer a las hembras. Sin embargo, a pesar de su encanto y adaptabilidad, el cardenal amarillo enfrenta serias amenazas que lo han llevado a ser catalogado como "En Peligro Crítico" en la Lista Roja de la UICN, principalmente debido a la pérdida de hábitat y a la captura ilegal para el comercio de aves. Su conservación requiere esfuerzos urgentes para preservar su entorno natural y combatir las prácticas que ponen en peligro su existencia.',
        Logo1: 'EN',
        Texto2: 'En peligro',
        Texto3: 'Gubernatrix cristata',
        Texto4: '1000 a 2000 individuos',
        Texto5: '30 a 40 gr',
        Texto6: '15 cm de longitud',
        Texto7: 'Sabanas y pastizales',
        Texto8: 'El cardenal amarillo enfrenta diversas amenazas que ponen en peligro su supervivencia. La principal amenaza es la pérdida de hábitat debido a la expansión agrícola y la deforestación, lo que reduce sus lugares de anidación y fuentes de alimento. Además, la captura ilegal para el comercio de aves exóticas representa un peligro significativo, ya que esta especie es apreciada por su llamativo plumaje. Estas amenazas combinadas han llevado a que el cardenal amarillo sea catalogado como "En Peligro Crítico" en la Lista Roja de la UICN, subrayando la urgencia de tomar medidas de conservación para proteger esta especie única y amenazada. Es crucial implementar estrategias de conservación que aborden la protección de su hábitat y la regulación del comercio ilegal para garantizar la supervivencia a largo plazo de esta hermosa ave.'
      }
    case 'hormiguero':
      return {
        Animal: AnimalHormiguero,
        WorldMap1: WorldMapHormiguero,
        Amenazas1: Amenazas1Hormiguero,
        Amenazas2: Amenazas2Hormiguero,
        Ayuda1,
        Ayuda2,
        Texto1: 'El oso hormiguero gigante, una asombrosa criatura que habita en América Central y del Sur, se distingue por su imponente tamaño y características únicas. Con una longitud que puede alcanzar los 2 metros, incluida su larga cola, y un peso que oscila entre 33 y 41 kilogramos, este oso hormiguero presenta un pelaje grueso de tonalidades grises o marrones. Su hábitat abarca desde selvas tropicales hasta sabanas y pastizales, y se adapta a diversas condiciones ambientales. Dotado de un hocico alargado y una lengua extensible, el oso hormiguero gigante es un experto cazador de hormigas y termitas, consumiendo grandes cantidades de insectos en sus incursiones nocturnas. Aunque prefiere la soledad y es territorial, este mamífero contribuye al equilibrio ecológico al controlar las poblaciones de insectos. A pesar de no encontrarse actualmente en peligro de extinción, la conservación de su hábitat es esencial para asegurar la supervivencia a largo plazo de esta extraordinaria especie, enfrentando desafíos como la deforestación y la caza.',
        Logo1: 'VU',
        Texto2: 'Vulnerable',
        Texto3: 'Myrmecophaga tridactyla',
        Texto4: 'En descenso',
        Texto5: '33 a 41 Kg',
        Texto6: 'Hasta 2 mts de longitud',
        Texto7: 'Sabanas y pastizales',
        Texto8: 'El oso hormiguero gigante enfrenta diversas amenazas que afectan su supervivencia. La principal amenaza es la pérdida de hábitat debido a la deforestación y la expansión humana, lo que reduce sus áreas de caza y desafía su capacidad para encontrar alimento. Además, la caza ilegal y el comercio de mascotas representan riesgos significativos para esta especie. La fragmentación del hábitat y los atropellos por vehículos también contribuyen a sus desafíos de supervivencia. La conservación del oso hormiguero gigante requiere medidas efectivas para proteger sus hábitats naturales, abordar la caza ilegal y promover la coexistencia armoniosa entre esta especie y las comunidades humanas.'
      }
    default: return {
      Animal: AnimalVaquitaMarina,
      WorldMap1: WorldMapVaquitaMarina,
      Amenazas1: Amenazas1VaquitaMarina,
      Amenazas2: Amenazas2VaquitaMarina,
      Ayuda1,
      Ayuda2,
      Texto1: 'La vaquita marina es una pequeña y escurridiza marsopa que habita en el Golfo de California, México. Conocida por su distintivo aspecto, caracterizado por manchas oscuras alrededor de los ojos y los labios, la vaquita es reconocida como el cetáceo más pequeño del mundo. Lamentablemente, también es uno de los mamíferos marinos más amenazados. Su comportamiento tímido se manifiesta en su reacción cautelosa ante embarcaciones y otros estímulos externos. Con una dieta que probablemente consiste en peces y calamares adaptados a su entorno marino específico, la vaquita se desplaza en grupos pequeños, asociándose con áreas ricas en alimentos.Aunque los detalles sobre su comunicación y reproducción son limitados, se cree que utilizan sonidos para la comunicación y que las hembras dan a luz crías. La vaquita enfrenta amenazas críticas que la colocan al borde de la extinción. Nuestros esfuerzos de conservación se centran en proteger su hábitat y mitigar las amenazas humanas para garantizar la supervivencia de esta especie única y esquiva.',
      Logo1: 'CR',
      Texto2: 'En Peligro',
      Texto3: 'Phocoena sinus',
      Texto4: 'Aproximandamente 10 individuos',
      Texto5: '45 kg',
      Texto6: '1,5 mts de longitud',
      Texto7: 'Marino (Golfo de California, México)',
      Texto8: 'La vaquita marina enfrenta una serie de amenazas críticas que ponen en peligro su supervivencia. La principal amenaza es la pesca ilegal de totoaba, donde las vaquitas quedan atrapadas en las redes destinadas a capturar estos peces. Este comercio ilegal, impulsado por la demanda de la vejiga natatoria de totoaba en el mercado asiático, ha llevado a una disminución drástica de la población de vaquitas. Además, la pérdida de hábitat, la contaminación y el riesgo de colisiones con embarcaciones contribuyen a su vulnerabilidad. Aunque se han implementado medidas de conservación, la crítica situación de la vaquita marina destaca la necesidad urgente de acciones coordinadas a nivel nacional e internacional para proteger este pequeño cetáceo y preservar su hábitat único en el Golfo de California.'
    }
  }
}
