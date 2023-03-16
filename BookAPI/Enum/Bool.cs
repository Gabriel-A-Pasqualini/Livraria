using LinqToDB.Mapping;
using System.ComponentModel;

namespace BookAPI.Enum
{
    public enum Bool
    {
        /// <summary>
        /// Sim
        /// </summary>
        [Description("Sim")]
        [MapValue("S")]
        Sim = 1,

        /// <summary>
        /// Não
        /// </summary>
        [Description("Não")]
        [MapValue("N")]
        Nao = 0
    }
}
