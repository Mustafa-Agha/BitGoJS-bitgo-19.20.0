import { KeyPair, PrivateKey, PublicKey } from 'paillier-bigint';

const publicKeys: PublicKey[] = [
  new PublicKey(
    BigInt(
      '3518437730951145351153969405615976885875586612922496645574245445216127031520606514090684864227424249504620171792718618318655835059604176086895223218122130603374842608906490090932711342695619354823729164163589735935908909561112685272525215734959274995895515717131806923150148404489283604316199693295008904464797380143833569850254454949598061584597614947438096042565248068205540902771943608979235593863386467044938676089484432095685428898224875330156934212270475973429309610315940313257084886981308879490629114922982078201079417244035483684330790614496883015654779864250773139802691449242751809386246076508441033033875787438106769994777473773577843587255513766172186380773432893155094458795295071990045500434377066399973631859839350568832298574544541461460061653578379835264522618130938456287180741057752096598085536238545459812388164988574312272806538380482853107085667417368295731814476083012880248022728445941326804224018271'
    ),
    BigInt(
      '3518437730951145351153969405615976885875586612922496645574245445216127031520606514090684864227424249504620171792718618318655835059604176086895223218122130603374842608906490090932711342695619354823729164163589735935908909561112685272525215734959274995895515717131806923150148404489283604316199693295008904464797380143833569850254454949598061584597614947438096042565248068205540902771943608979235593863386467044938676089484432095685428898224875330156934212270475973429309610315940313257084886981308879490629114922982078201079417244035483684330790614496883015654779864250773139802691449242751809386246076508441033033875787438106769994777473773577843587255513766172186380773432893155094458795295071990045500434377066399973631859839350568832298574544541461460061653578379835264522618130938456287180741057752096598085536238545459812388164988574312272806538380482853107085667417368295731814476083012880248022728445941326804224018272'
    )
  ),
  new PublicKey(
    BigInt(
      '5559279982102141444483687527548862466257768598087122788426610602416162064004465528776910917990329895625440428771496688358581466716997674065782051738875573947418793741290139012268348264576190413578114255055671604260223691717578543938781643980699133860577846813263416457926621480274559671486488319475586691765346312212218798470822209682230082031002333646042617536574186379916249871150187713311378695878610901721126442273146929401590060078363876898020720156973622679680565202318187214826688272304101857520321139699616513839842158662252363133801939983380610980330143885493939422285231474104648426974953177208821263690228581092542272388157930405271490741811451046888215557955003418443038516373248925906108085466279774161055253482582107416413911841462314957021429394341038514727833235682738563988690797006010996604579336374384930524427328162055172570616748695177742616833011866538256329157653315812135551598449409199647174785933703'
    ),
    BigInt(
      '5559279982102141444483687527548862466257768598087122788426610602416162064004465528776910917990329895625440428771496688358581466716997674065782051738875573947418793741290139012268348264576190413578114255055671604260223691717578543938781643980699133860577846813263416457926621480274559671486488319475586691765346312212218798470822209682230082031002333646042617536574186379916249871150187713311378695878610901721126442273146929401590060078363876898020720156973622679680565202318187214826688272304101857520321139699616513839842158662252363133801939983380610980330143885493939422285231474104648426974953177208821263690228581092542272388157930405271490741811451046888215557955003418443038516373248925906108085466279774161055253482582107416413911841462314957021429394341038514727833235682738563988690797006010996604579336374384930524427328162055172570616748695177742616833011866538256329157653315812135551598449409199647174785933704'
    )
  ),
  new PublicKey(
    BigInt(
      '3419795036051751326232007976609200237604493563463109991478047849314540738441586840435257858661448011715038876170879818674634195871269424409935576422629843144716466096048216628110568712633256882853658852508028698815879196356826463950197968220243367168687232025957988052415497291486819014280368039809296103337800080444783056910949343036177594726564711241012248651433602320774425766350670709203417440194186446326630378750811782924476703620755611181053239997555445969329218286366661563286625968009269681111150677955327096002821916234533692380535533494097687662790678674730094453398816503818796605911919287632160967404198139265262300512143763101956262589394016636681910324066077224948906791740741253137197857372559384081568856164828041560293416959423584053432725168149054199495563681852826407211234156895393425911225194834032552105386598749926944086498223820699058520002597435086472729756391017927757198422498281513733520888377521'
    ),
    BigInt(
      '3419795036051751326232007976609200237604493563463109991478047849314540738441586840435257858661448011715038876170879818674634195871269424409935576422629843144716466096048216628110568712633256882853658852508028698815879196356826463950197968220243367168687232025957988052415497291486819014280368039809296103337800080444783056910949343036177594726564711241012248651433602320774425766350670709203417440194186446326630378750811782924476703620755611181053239997555445969329218286366661563286625968009269681111150677955327096002821916234533692380535533494097687662790678674730094453398816503818796605911919287632160967404198139265262300512143763101956262589394016636681910324066077224948906791740741253137197857372559384081568856164828041560293416959423584053432725168149054199495563681852826407211234156895393425911225194834032552105386598749926944086498223820699058520002597435086472729756391017927757198422498281513733520888377522'
    )
  ),
];

export const paillierKeyPairs: KeyPair[] = [
  {
    publicKey: publicKeys[0],
    privateKey: new PrivateKey(
      BigInt(
        '3518437730951145351153969405615976885875586612922496645574245445216127031520606514090684864227424249504620171792718618318655835059604176086895223218122130603374842608906490090932711342695619354823729164163589735935908909561112685272525215734959274995895515717131806923150148404489283604316199693295008904464797380143833569850254454949598061584597614947438096042565248068205540902771943608979235593863386467044938676089484432095685428898224875330156934212270475969536860960023565872542981123884909435922061427075627624118792704816165166060625127329513255846874385408994935858852843242812071436822307528079009173717956004927226512650675594687410809930673446058771235241963897840146296929794819397583948716190167670510409659790464657786142018565143984809488047070179789422758621705591900574320485887237441447809291057152861686147670005549463059161761401467501638476938463710644048912145287816435446796785861244973339835829254944'
      ),
      BigInt(
        '1435954335320361291464794961141454443124301305901245976109147112229398263957353646916618928299701387179724868183943223273223348983874015884972297309455012981285798675641531110051575263784014434045342072575481009715037360675724480765610962543673424293127443601559011683972147364827088075169004494067132256511169014997312801214885061126770368779683378359021702966973276409294576549331226890331970409259208324445765942474619117302113452059967277594783047695829628325417350082704697181786094004431225754002294780260390999767425213396610936573696235666130372117527334277864037293833144593848612399944960923930804637560601779615923939677804976892228458354767472520726635315271778474008095672038355051137074392455105389034276313836535861874150900910146438695047930390192784363171105023997452851042092518183452361840375191258825712627269056888057997955367097496433884792466698812320228030415823348387779142045639271717733178455170588'
      ),
      publicKeys[0]
    ),
  },
  {
    publicKey: publicKeys[1],
    privateKey: new PrivateKey(
      BigInt(
        '5559279982102141444483687527548862466257768598087122788426610602416162064004465528776910917990329895625440428771496688358581466716997674065782051738875573947418793741290139012268348264576190413578114255055671604260223691717578543938781643980699133860577846813263416457926621480274559671486488319475586691765346312212218798470822209682230082031002333646042617536574186379916249871150187713311378695878610901721126442273146929401590060078363876898020720156973622674917459214741852516981345900007035403677655543520292447501136734695658903501552305868621939665603506890439535893633358635679388704173280597704407784249869083435825580096216792056951652777772325084790884033083743195194233984314273301619289847103060307323101937042652769346485033173578685962753829183263255881024651276523108073638392263520270836771809816056365714686576293840536576656859982412969784955920208267996229471137752388414453868181248934168448241697873608'
      ),
      BigInt(
        '3545087253251574958946231193307754302702496368842061322605701631179392682484049031268851879338829131287750409102008037785264714507264046091866620325457393115053993553783644546294566765944871675830223346977252181522821466317107259707356811291700597766153934439296020513412674480156405607631434604721517131582417198765391982589413968939353507687212812306398911792725606500867900528158960777454453478505967446238429787033128434906768211821087577157135160935007959241368826299527546564329165846336011830752936072262872818529509088846764172487072929096816657546604984652055659353423508142902833243417603835582239626159824444722637521781718306573132469763605215251474053073410251311302139397891051411492046755767298543679894449942777337267468963843621448649610266490767188327540471071350354239345098152253839232168131344777150952087212365717124179734902521127470811563197968130887499312162481083203285911422057154582020246591526195'
      ),
      publicKeys[1]
    ),
  },
  {
    publicKey: publicKeys[2],
    privateKey: new PrivateKey(
      BigInt(
        '3419795036051751326232007976609200237604493563463109991478047849314540738441586840435257858661448011715038876170879818674634195871269424409935576422629843144716466096048216628110568712633256882853658852508028698815879196356826463950197968220243367168687232025957988052415497291486819014280368039809296103337800080444783056910949343036177594726564711241012248651433602320774425766350670709203417440194186446326630378750811782924476703620755611181053239997555445965288311782600378940005159266407018117662854937249701544829603784020603001619393915920275340316019024841092029013900679814459761895892825132589198134321972278571781649748713522270590229431348193168742886714422893464498090911746357134679085689195281601662838374180952780600462180009886822685921895449695925196876378752420029602659120654628004048931388507249168836539077599849871882190267877916525060795099055438192742273159506669200118769552637205556183311707520112'
      ),
      BigInt(
        '177120209763047308846671917872191766258562845716846148655573628204942743240582717211152959189705878616028740521793523875278152244758836582001026318687260190614615213016156379672576326076533776745348620135620215693753021483776984072519477214628504495730794382329142010286971822120920010303070395874054923954508028499887057775055090520569174838189376441304667334617739461014338785323126620499537690639064131257257591735087433704543050494588400620387334940102830080958234862328285508917888854545569053258410202932033998009097637980114327997627337605480896849551520859815576589836526732257865487110170226173726132568639349855332977922257053618578739508873290894794772916500559778515040297510082006588678525227147222353568201000290606883100277099893115190381331693317820325104044381663491604446803579063935129364599392501221854190092852624852720770267661722218603192935570194809928758099413718086915919666376302277952983105473163'
      ),
      publicKeys[2]
    ),
  },
];