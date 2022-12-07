const testInput = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;

const input = `wzsspbssbhshchmmrmprmrfrsfrrjhjphjjtppbfflqfqppdhdbhdhbbjgghgzgsgfsfhfhvvwcwhwwnppsbsggqnnvvtffpssjfjnnltntdtdddptprppjmmqssrlrplllfrrzggbmmlmnmtnnzddfdgfdfsstbstbbzcbbcjcvvfwwwzlzssglsgllnbnmbnmbbgmmppmwwsrrzqqvgqgnqnmmswwrnnbsnnbdbwwqnwqnwwzzqwzqzjqqwbqbccjcwwjlwjwppqfqjffwddrzrjzrjzzzhchjjlqqrggzvvnlvnvjvhvnvjvbbvdvldldbbwddtsscbbhccmbmbppbmmgjggcjjlrrwjwtjwwmffgddwvdvbdbvvhchmhmdmwwbjbjcbbcmbmmslmlslsjjrnrjrjpjcjgcjcjbbwsbsbfssjzsjsggcmcsswgssbbqpbqqdsdqqztzmzpmpbmbvbjjtrjtthwhbhnbhnbnssvpvsppgrrcwrrmqqhpphrpphchvhphqhbqbtttllsrlsrshrrmhmvvrmrnngbgnbnpbprrrftfjtjwwmrmvmcmvmrmwmssrccfbbhppjbpbwbqwbqbzzfmzmtttjbbvcvppmwwrbbzsbzbfzfdzzhrhzhvvsqvsqsnslljwllqlwllvccnttzhtzzpspqspqsqgsssvnsvshvsvqvnvlldbbfdfmmpbpgphhpqhpppchhbfbrfrllntnznrrhdrdhhdhjjgwwqhhfssjbjwjqqbffvvcrchccwmcwcllljtjrrqgrrdcrddvfvwvzzjqqcffgjgzzdhdwdssffjjhccggmtmltlhtthzhvhlvlddsfsbbtjbjcbjcjzcjjpfjfzzpnnbtbqtbqtqptpnplllbzbllhbllnqnttpddqvdqvqmmjnjggnnnhqqfcqcffqppdgpddvqddmhmrhrtrmrzmzhzpzlzqlqpqhphrpppjqqppzbzmmjgggqtggtjthhlclnclcnccmcppdcpddqrrfgrgbbhwhdhrrqtqpqjpqjpqjqqmcqmccnngqqqmtqtssnvnzvvpcpwcwwqcqqqfcqffsvsmvmttttmrrzssghgssjmsmbmvvwggggzhhfvdpgjmmvzbfjghqhrfbpmbvjzwvfmcthrqwdhghpwsspmhpqnmwhjzpnlzfnvhdnnrqwnvctbmjqzhqrpjlwrssdlwqzmsfrfzmgjhnwwnwczswnhsdbvqbmdlvntsdrhrjjcjjhpbblgwhjwdcdjtpvtmslwvncwdjbwzvbpzbvddvssnrhtshrcvnhqnpmjzfswqbbrztnwjcpflfbhnphfwmjvnvtswgfttgjcqcngmmwjlfsprwfcfwcmgrgbnqmzbtzbtbztngvrzpsnrzvhbsdjnzpwwzllgnfdrlwpmnrznqsqcmvnfbnhqjddvcjmtgbpbmsgqdqzflmlmqncmhwltrmdmgnwpfwddrdpfhsgsnggchzjhgpwrsmdzgjtrgmnprhbwbcbpzbdvvstfqcnqzbdjqpmrdbtgcthtclftghhmnrzrjqqsbndhpvmdpfpwdlhvmczvdfgvpqclssvlhqnhlcfnfbvtspdzmgzdctvpdcwchtqhpsgmmblspjdlvgblbpgrfrgnqqsphcsrgfsdmpqscbjmnqrfbcwfthdtswbzthpnvsfbntnbmmgpfzlqwhppvvdrmwbqzbgppbgsqmjfqtmntgwpnccthftwdmvwmnchlbjhsnmbhndczbrhhjpbvnjdzrcndbbmfwfwsjwfgbqhwhrsvlngsbhhlrdjzzbmjpsqhlpzwcsntjhlmngblspmsjrjwsjsrqwnrcwsmcsbmpjwrthbqhrschrmrppnnbmjbvjzlmzsrfdwqlfnfjljftjvzsqdwlhbblqcdlqjbprpcllhlhmwrbrlgfrcqshrtjpnmhljttdvpfnhdjqvjhhfczwvbzqgnzgljcfrbpgwnfhfchwzqmqqzpbcdpqmnbrppzblnnzqrfnmgtljwnfgzwvnjppdbdhbznvpgwhbdjjvlspgwgjsmfsvllpgwlfnnptmwnfsshjjvqzjwrqpvmsphpmftqdllqqdzcjwfvpftgvspprdwvvcnglmbpntghntdwpjvvsppgjvnbjgvtzchtqtwbddncsbrfcvrnvlggvwgmmnfzrswnzjrwthzmdsmzqmzsnrqsnslnhmfqljnnnzshqfqshrhhjmnhdgphctswdbhnrcgnzmmzqpjqbtdfhhltsmvvtntbgsznshhsghblhlhqpmdcfhmnfzvhgnfsfflcfwbfqzmccrjdpfvphtqbrdnzjfmfhbzqcpdnjdcgwprvchlzrcvrghgjqncjvnndbcshntrfsbsnmjlhclnzpfdgztflcpwqpnvlscfndwqzfvcmpgfncszpmwcsrdbrrhdjvmthslfvmlgpqhlgwhqnjljcvhswbsbqfrfhvzwjvdmhzsgbmbmfnbpclqdwhvrlpppszptjvwtvdmfltfqqgjttdggcvllblnnhjqnjzhvpgpzzpzwbpjqbthnjjlmsjgjzqwnjlqrcdmmvsldtcrzqdrcmwqhnhfghdlmzwcspgmlpzhbdsmlwlqnhhvcvdfzmvfwpbfmjtdllprfqzzjpbrshdzgspsrlrwrhdpmznzzqngwrzqpmtwgbsswrnnnfctjhbcftnslsqwjvmfwfdvfqcnsvfsvgstgbzpmljjtlvtnfsdzpvcgbjqwgbgzqbjfgltqvnhffflsbjzfqfrfbssrvvwqvqptmhrbgllqjwptrzgvqgccsrvbgtvmzfzlmtqrgfwhzddsptclbhjlwqfntvjqdvcddnffmbtqrnsvtmlvljcqdsrpggcmqvmmlzwwbgznhblwzjdppvtqzjvcmtfzhdzjplrdbrfrgzpldvnsgqlbwbmfvrbgwzmjmmqdfgwtbgtzmdqnvqbwvcfjhddqvnjtjlhhjnltbtqqvblwlmglrqcrcfjvdntrnqzzbmrjqglmrdcjgnshcghtprjqqsdrmgdnzmzcfqqdtjtrqgtqtgrpmmgzjtcrznmqccjbdpbvrnnbmbzvgdcnrczbctbrsrrqrjnfcdpzlnngwvcdtbbgssvhpptntqdzhcqtlpvzjbfgzggrgrcgtdfjbwdcrpztnfcdbscnlmqmwcbmtnddgbmhwsgvcfdcmhlsvtnqtmrnsjzhppgwvzlmhwwmpfjzrfbhsgntzrdhwswrnfmmmczqrvdrqnhgrvqbdddhglwsftsljvgbnjqfwfzsspdqvgsnlgfsfpvdrjhzcldtrmjjrmdhvvfrjldhhtqnvsvlldjpjbpwstfsmrpmbqbnnpvqtbgjvblthbmwqtfcfgnjscvtbvlqcmlhffpzgjzfscsqwnhrjhvbrrzwqvbjwtwhtqsdbssfgncppnsfgfltdcbjqjzqqtprsbvjzhmchnltvmbsvpvhgzhfhbrnttsqbcmwpdnwqqgdrjrdwdhtzwsmcdffqgsddvbzfjhtfhtnfdbfrwmdtcqshfjrcpswzcptgwgmctpmzjdbqlmqwthmnfplmctpsslcsdtqpqhjtmjdnmnqnjgchwstsmtpvsmgpsbfgwqnzhrdgdvcdlcldfcmjvsdldgbmhltjhczffwmzqssnhfnwftfgpshntjbpjdffjpcmcpwhclrrwqcqzmntjglzgcfrplfpvprtpvpjdlcrfwrtrzdzmhsrsmdcpqqrqgvfpdbmzbzqdfhpplmgfrdghclbclgswvwhhdvcpmpzflpffmptcrwglftztccrpbrvmpnqmqdgjgrrlbtqtvgcjpljttwtdslqjqlsdpblgrqbrtbmtblfbqtbvsqhpqzpqfhjqpmjrmcvqmsbbpjpdncgnjftclbltwszrrfzqbjcdtphcvpmbhppvwjwlprgmghrjzzgnvzlvghnjbzqjpdgzfsnjchpbzqdzpsjmsrvvqwjcpwznlpbjldlrdfqtrzhqzcnpjqbbbf`;

// day 1
const startMarker = (input, markerLength) => {
  for (let i = 0; i < input.length; i++) {
    const range = input.slice(i, i + markerLength).split('');
    const uniqueRange = new Set(range);
    if (uniqueRange.size === markerLength) {
      return i + markerLength;
      break;
    }
  }
};

// console.log('marker', startMarker(input, 4));
console.log('marker', startMarker(input, 14));