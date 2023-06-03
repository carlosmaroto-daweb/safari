/********************************** ANIMALS **********************************/

const child_animal_nav = document.getElementById('animal-nav').children;
const animal_1         = document.getElementById('animal-1');
const animal_2         = document.getElementById('animal-2');
const animal_3         = document.getElementById('animal-3');
const animal_4         = document.getElementById('animal-4');
const animal_5         = document.getElementById('animal-5');
const animal_6         = document.getElementById('animal-6');
const animal_7         = document.getElementById('animal-7');
const animal_8         = document.getElementById('animal-8');
const animal_9         = document.getElementById('animal-9');
const animal_image     = document.getElementById('animal-image');
const animal_text      = document.getElementById('animal-text');

animal_1.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-1');
    animal_text.innerHTML = 
        "<p>Leopards are large felines belonging to the family Felidae and the genus Panthera. They are native to various regions in Africa and Asia and are known for their beauty and adaptability. Here are some highlights about leopards:</p>" +
        "<p><span>Physical characteristics:</span> Leopards are elegant and muscular animals with a long body and short, sturdy legs. They have a rounded head with large eyes and pointed ears. Their fur is short and covered in spots called \"rosettes,\" which are unique to each individual. These rosettes are arranged in a ring shape and can be black or golden, depending on the subspecies and habitat.</p>" +
        "<p><span>Habitat:</span> Leopards are highly adaptable and can be found in a wide range of habitats, from tropical jungles to semi-desert areas. They prefer areas with dense vegetation where they can hide and hunt. They are also good swimmers and feel comfortable in the water.</p>" +
        "<p><span>Behavior:</span> Leopards are solitary and nocturnal, meaning they are more active during the night. They are excellent climbers and can easily climb trees, where they often drag their prey to protect it from other predators. They are stealthy hunters and approach their prey with patience before launching a quick and precise attack.</p>" +
        "<p><span>Diet:</span> Leopards are opportunistic predators and have a broad diet. They feed on a variety of prey, including antelopes, wild boars, monkeys, birds, rodents, and reptiles. They are also known for dragging their prey up trees to prevent other carnivores from stealing their food.</p>" +
        "<p><span>Reproduction:</span> The gestation period for a female leopard lasts around 90 to 105 days, after which she gives birth to a litter usually consisting of two or three cubs. The cubs are born blind and rely entirely on their mother for the first few months. They stay with the mother until they reach independence, around 18 to 24 months of age.</p>" +
        "<p><span>Conservation status:</span> Leopards are classified as \"near threatened\" by the International Union for Conservation of Nature (IUCN). Habitat loss, poaching, and human-wildlife conflict are the main threats they face. The demand for their skin and body parts in the black market also poses a danger to their survival.</p>";
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_1.classList.add('active');
});
animal_2.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-2');
    animal_text.innerHTML = 
        "<p>Lions are large carnivorous felines belonging to the family Felidae and the genus Panthera. They are native to Africa and are known for their majestic appearance and social behavior. Here are some highlights about lions:</p>" +
        "<p><span>Physical characteristics:</span> Lions are robust and muscular animals with a large head and a distinctive mane in males. Males typically have a thick, dark mane that varies in color from blond to black, while females have a smaller and less noticeable mane. They have a tawny-colored fur with shades of yellow, brown, and ochre. Lions have a strong body, short legs, and a long tail with a tuft of hair at the end.</p>" +
        "<p><span>Habitat:</span> Lions inhabit various types of habitats in Africa, including grasslands, savannas, and scrublands. They prefer areas with a mix of open spaces for hunting and vegetation for cover. Lions are known for their adaptability to different habitats and can tolerate a wide range of environmental conditions.</p>" +
        "<p><span>Behavior:</span> Lions are highly social animals and live in groups called prides. A pride typically consists of several adult females, their offspring, and a coalition of males. Lions are cooperative hunters, and females usually work together to bring down prey. Males defend the pride's territory and offspring from rival males. They are primarily active during the cooler hours of the day and rest or sleep for long periods, conserving energy.</p>" +
        "<p><span>Diet:</span> Lions are apex predators and primarily feed on large herbivores such as zebras, wildebeests, buffalo, and antelopes. They are opportunistic hunters and will scavenge on carcasses when the opportunity arises. Male lions often take charge of hunting while females play a crucial role in ambushing and capturing prey.</p>" +
        "<p><span>Reproduction:</span> Female lions typically give birth to a litter of one to six cubs after a gestation period of about 100 to 110 days. The cubs are born blind and rely on their mother's milk for nourishment. They start consuming solid food at around three months old and are weaned at about six to seven months. The cubs stay with the pride until they reach maturity, around two to three years old.</p>" +
        "<p><span>Conservation status:</span> Lions are currently classified as \"vulnerable\" by the International Union for Conservation of Nature (IUCN). They face various threats, including habitat loss, human-wildlife conflict, poaching, and trophy hunting. Conservation efforts focus on protecting their habitats, mitigating conflicts, and implementing sustainable management practices.</p>";
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_2.classList.add('active');
});
animal_3.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-3');
    animal_text.innerHTML = 
        "<p>Rhinoceroses, commonly known as rhinos, are large herbivorous mammals that belong to the family Rhinocerotidae. They are native to Africa and Asia and are known for their distinctive appearance and prehistoric lineage. Here are some key points about rhinoceroses:</p>" +
        "<p><span>Physical characteristics:</span> There are five extant species of rhinoceros: the White rhinoceros, Black rhinoceros, Indian rhinoceros, Javan rhinoceros, and Sumatran rhinoceros. Rhinos are characterized by their massive bodies, thick skin, and one or two horns on their snouts. Their horns are composed of keratin, the same material as human nails.</p>" +
        "<p><span>Habitat:</span> Rhinos inhabit a variety of habitats, including grasslands, savannas, forests, and swamps. They are mostly found in sub-Saharan Africa and parts of Asia. Each rhino species has its specific habitat preferences and range.</p>" +
        "<p><span>Behavior:</span> Rhinos are generally solitary animals, except for the White rhinoceros, which is more social. They have poor eyesight but possess an excellent sense of smell and hearing. Rhinos are known for their aggressive behavior when threatened, and they can charge at high speeds, even though they are large and heavy animals.</p>" +
        "<p><span>Diet:</span> Rhinoceroses are herbivores, and their diet primarily consists of grasses, leaves, shoots, fruits, and bark. They use their prehensile lips to grasp and feed on vegetation.</p>" +
        "<p><span>Reproduction:</span> Female rhinos have a long gestation period that can last around 15 to 16 months, depending on the species. They give birth to a single calf, and the mother provides care and protection for the offspring. Calves stay with their mothers for several years before becoming independent.</p>" +
        "<p><span>Conservation status:</span> Rhinoceroses are among the most endangered mammals on the planet. They are targeted by poachers for their horns, which are highly valued in traditional medicine and as status symbols. Habitat loss due to human activities, such as deforestation and urbanization, also poses a significant threat to their survival. Conservation efforts, including anti-poaching measures and habitat protection, are crucial for their conservation.</p>";
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_3.classList.add('active');
});
animal_4.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-4');
    animal_text.innerHTML = 
        "<p>Elephants are magnificent creatures that belong to the family Elephantidae. They are the largest land animals on Earth and are known for their remarkable intelligence and social behavior. Here are some key points about elephants:</p>" +
        "<p><span>Physical characteristics:</span> Elephants have a unique appearance with their long trunks, large ears, and tusks. They have a thick and wrinkled gray skin that helps protect them from the sun and insects. African elephants are larger than their Asian counterparts and have larger ears and tusks.</p>" +
        "<p><span>Habitat:</span> Elephants inhabit a variety of habitats, including forests, savannas, grasslands, and even deserts. They require access to water sources as they need to drink and bathe regularly. Elephants are found in Africa and Asia, with different species adapted to specific regions.</p>" +
        "<p><span>Behavior:</span> Elephants are highly intelligent and social animals. They live in close-knit family groups led by a matriarch, typically the oldest and most experienced female. They have a complex communication system that includes vocalizations, body language, and infrasound (low-frequency sounds). Elephants also display a range of emotions and exhibit empathy and grief.</p>" +
        "<p><span>Diet:</span> Elephants are herbivores with a primarily vegetarian diet. They consume a large quantity of plant matter, including grasses, leaves, bark, and fruits. Adult elephants can consume up to 300 kilograms (660 pounds) of food per day.</p>" +
        "<p><span>Reproduction:</span> Female elephants, known as cows, have a gestation period of around 22 months, which is the longest among land mammals. They give birth to a single calf, and the mother and other herd members are highly protective of the newborn. Calves are cared for and nurtured within the social group.</p>" +
        "<p><span>Conservation status:</span> Elephants are facing significant threats, primarily due to habitat loss, poaching for ivory, and human-wildlife conflict. Both African and Asian elephants are classified as endangered by the International Union for Conservation of Nature (IUCN). Conservation efforts are focused on protecting their habitats, preventing poaching, and promoting community-based conservation initiatives.</p>";
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_4.classList.add('active');
});
animal_5.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-5');
    animal_text.innerHTML = 
        "<p>Buffaloes, also known as water buffaloes or Asian buffaloes, are large bovines primarily found in Asia and parts of Europe and Africa. They belong to the Bovidae family and are known for their strength, resilience, and their significance in various cultures. Here are some key points about buffaloes:</p>" +
        "<p><span>Physical characteristics:</span> Buffaloes have a robust build with a large head, long and curved horns, and a stocky body. They have a distinctive set of horns that can grow to impressive sizes. Their coat is usually black or dark gray, and they have a sparse covering of hair.</p>" +
        "<p><span>Habitat:</span> Buffaloes are well-adapted to wetland habitats and are often found near rivers, swamps, and marshes. They require access to water for bathing and wallowing to regulate their body temperature and protect themselves from insects and parasites.</p>" +
        "<p><span>Behavior:</span> Buffaloes are social animals and usually live in herds. They have a hierarchical structure within the herd, led by a dominant male known as the \"bull.\" Buffaloes are known for their strong maternal instincts, and females protect their young from potential threats.</p>" +
        "<p><span>Diet:</span> Buffaloes are herbivores and primarily feed on grasses, aquatic plants, and leaves. They are well-suited for grazing in wetland areas and can consume large quantities of vegetation in a day. Their specialized digestive system allows them to extract nutrients from coarse plant material.</p>" +
        "<p><span>Domestication:</span> Buffaloes have been domesticated for centuries and are an important livestock species, particularly in Asia. They are used for agricultural purposes, such as plowing fields and pulling carts, as well as for their milk, meat, and hide, which are valuable resources.</p>" +
        "<p><span>Conservation status:</span> The conservation status of buffaloes varies depending on the species and region. Some subspecies, such as the water buffalo, are classified as \"domesticated\" due to their widespread presence in farming systems. However, wild populations of certain buffalo species, like the African buffalo, may face conservation concerns due to habitat loss and hunting pressures.</p>";   
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_5.classList.add('active');
});
animal_6.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-6');
    animal_text.innerHTML = 
        "<p>Giraffes are the tallest land animals and belong to the Giraffidae family. They are native to the savannas and grasslands of Africa and are known for their unique and distinctive features. Here are some key points about giraffes:</p>" +
        "<p><span>Physical characteristics:</span> Giraffes are known for their long necks, which can reach up to 5.5 meters (18 feet) in length. They have a small head with large eyes, long legs, and a spotted coat. The coat pattern consists of large brown patches separated by lighter areas. Each giraffe's coat pattern is unique, similar to a human fingerprint.</p>" +
        "<p><span>Habitat:</span> Giraffes inhabit various types of habitats, including grasslands, savannas, woodlands, and open plains. They prefer areas with abundant vegetation where they can find leaves, flowers, and fruits to eat. Giraffes are well adapted to these environments, with their long necks allowing them to reach high foliage.</p>" +
        "<p><span>Behavior:</span> Giraffes are social animals that live in loose groups called towers or herds. These groups typically consist of females and their young, while adult males tend to be more solitary. Giraffes are diurnal, meaning they are active during the day. They spend a significant amount of time feeding, as they require large amounts of vegetation to sustain their size.</p>" +
        "<p><span>Diet:</span> Giraffes are herbivores and primarily feed on the leaves, shoots, and fruits of acacia trees and other plants. Their long necks and prehensile tongues allow them to reach foliage at heights that other herbivores cannot access. They can also go for long periods without water, as they derive most of their hydration from the vegetation they consume.</p>" +
        "<p><span>Reproduction:</span> Female giraffes give birth to a single calf after a gestation period of around 14 to 15 months. The newborn calf is typically around two meters (six feet) tall at birth. Within hours, the calf can stand and walk with its mother. They have a strong bond, and the mother cares for and protects the calf until it becomes independent.</p>" +
        "<p><span>Conservation status:</span> Giraffes are currently listed as \"vulnerable\" by the International Union for Conservation of Nature (IUCN). They face threats such as habitat loss, poaching, and illegal hunting. Conservation efforts are underway to protect giraffe populations and their habitats.</p>";
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_6.classList.add('active');
});
animal_7.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-7');
    animal_text.innerHTML = 
        "<p>Hippopotamuses, or hippos for short, are large semi-aquatic mammals native to sub-Saharan Africa. Here are some key points about hippos:</p>" +
        "<p><span>Physical characteristics:</span> Hippos are massive animals with barrel-shaped bodies and short legs. They have a large head, a broad mouth, and two long, curved canine teeth known as incisors. Their skin is thick and virtually hairless, with a grayish-brown color. They have webbed toes and are well-adapted to life in water.</p>" +
        "<p><span>Habitat:</span> Hippos inhabit rivers, lakes, and swamps, spending the majority of their time submerged in water to keep their bodies cool and protected from the sun. They are most commonly found in sub-Saharan Africa, particularly in countries such as Uganda, Kenya, and Zambia.</p>" +
        "<p><span>Behavior:</span> Hippos are known for their semi-aquatic lifestyle. They are primarily herbivorous and feed on grasses and other vegetation. They are most active at night and spend a significant portion of their day in water. Hippos are highly territorial and can be quite aggressive, especially when it comes to defending their territory or young.</p>" +
        "<p><span>Social structure:</span> Hippos are generally found in groups known as \"pods\" or \"bloats,\" which can consist of anywhere from a few individuals to dozens. These groups are typically led by a dominant male, while females and their offspring form the majority of the group. Hippos communicate through vocalizations, body postures, and aggressive displays.</p>" +
        "<p><span>Reproduction:</span> Female hippos typically give birth to a single calf after a gestation period of around 8 months. The calves are born in water and are cared for by their mothers. They nurse underwater and start grazing on vegetation after a few weeks. The bond between a mother hippo and her calf is strong and lasts for several years.</p>" +
        "<p><span>Conservation status:</span> Hippos are classified as \"vulnerable\" by the International Union for Conservation of Nature (IUCN). They face threats such as habitat loss, illegal hunting for their meat and ivory-like teeth, and conflicts with humans. Conservation efforts are essential to protect hippos and their habitats.</p>";
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_7.classList.add('active');
});
animal_8.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-8');
    animal_text.innerHTML = 
        "<p>Zebras are herbivorous mammals that belong to the Equidae family and are best known for their distinctive black and white stripes. Here are some key points about zebras:</p>" +
        "<p><span>Physical characteristics:</span> Zebras have a horse-like body with a large head, long neck, and slender legs. Their most recognizable feature is their unique pattern of black and white stripes, which vary in width and arrangement among different species. Each zebra's stripe pattern is as unique as a human fingerprint.</p>" +
        "<p><span>Habitat:</span> Zebras are native to the grasslands, savannas, and open woodlands of Africa. They prefer areas with access to water sources and ample grazing opportunities. They are highly adaptable and can be found in a range of habitats, from arid regions to more lush environments.</p>" +
        "<p><span>Behavior:</span> Zebras are social animals and live in small to large groups called herds. These herds usually consist of a dominant male, several females, and their offspring. Zebras communicate with each other through vocalizations, body postures, and facial expressions. When threatened, they may also display defensive behavior by kicking or biting.</p>" +
        "<p><span>Diet:</span> Zebras are herbivores, feeding primarily on grasses and other plant material. They have strong teeth and jaws adapted for grazing, and their digestive system allows them to extract nutrients from tough vegetation. They are constantly on the move to find fresh grazing grounds and water sources.</p>" +
        "<p><span>Reproduction:</span> Female zebras, called mares, give birth to a single foal after a gestation period of around 12 to 13 months. The foals are able to stand and walk shortly after birth and join the herd within a few days. They are weaned at around one year of age but may stay with their mother and the herd for several years.</p>" +
        "<p><span>Conservation status:</span> Different zebra species have varying conservation statuses. For example, the Plains zebra (Equus quagga) is listed as \"near threatened\" by the International Union for Conservation of Nature (IUCN) due to habitat loss, competition with livestock, and hunting. Other species, such as the Grevy's zebra (Equus grevyi), are classified as \"endangered\" due to more severe threats.</p>"; 
    for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_8.classList.add('active');
});
animal_9.addEventListener("click", function(){
    animal_image.classList.remove('animal-1', 'animal-2', 'animal-3', 'animal-4', 'animal-5', 'animal-6', 'animal-7', 'animal-8', 'animal-9');
    animal_image.classList.add('animal-9');
    animal_text.innerHTML = 
        "<p>Gazelles are slender and graceful antelopes that belong to the genus Gazella. They are native to various regions in Africa and Asia, and they are known for their speed and agility. Here are some highlights about gazelles:</p>" +
        "<p><span>Physical characteristics:</span> Gazelles have a slender body with long legs adapted for running. They have a small head with large, expressive eyes and long, pointed ears. Their fur is usually short and comes in various shades of brown and tan. Males often have curved horns, while females may have shorter or no horns.</p>" +
        "<p><span>Habitat:</span> Gazelles inhabit a range of habitats, including grasslands, savannas, and deserts. They prefer open areas with access to vegetation for grazing and have evolved to survive in arid environments with limited water resources.</p>" +
        "<p><span>Behavior:</span> Gazelles are highly adapted for speed and agility. They are known for their incredible running abilities, reaching speeds of up to 60 miles per hour (96 kilometers per hour). They use their speed to escape predators, employing sudden changes in direction and impressive leaps to evade capture.</p>" +
        "<p><span>Diet:</span> Gazelles are herbivores and primarily feed on grasses, leaves, and shoots. Their digestive system is adapted to extract maximum nutrients from low-quality vegetation, allowing them to thrive in habitats with sparse food resources.</p>" +
        "<p><span>Social structure:</span> Gazelles typically live in herds or groups, ranging in size from a few individuals to hundreds or even thousands. These groups may consist of females, their young, and a dominant male. The dominant male defends the group's territory and mates with the females during the breeding season.</p>" +
        "<p><span>Conservation status:</span> Several gazelle species are facing conservation concerns. Factors such as habitat loss due to human activities, poaching for meat and trophies, and competition with livestock have contributed to their decline in certain regions. Some gazelle species are listed as endangered or critically endangered by the IUCN.</p>";
   for (let i=0; i<child_animal_nav.length; i++) {
        child_animal_nav[i].classList.remove('active');
    }
    animal_9.classList.add('active');
});