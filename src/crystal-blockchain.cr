require "./crystal-blockchain/*"
require "kemal"
require "./Block"
module Crystal::Blockchain
  blockchain = [] of NamedTuple(
    index: Int32,
    timestamp: String,
    data: String,
    hash: String,
    infos: String,
    prev_hash: String,
    difficulty: Int32,
    nonce: String
  )

  # create genesis block
  blockchain << Block.create(0, Time.now.to_s, "apples", "", "prov->Milan|dests->Achen|batch->23")

  get "/blockchain" do |env|
    env.response.headers["Access-Control-Allow-Origin"] = "*"
    blockchain.to_json
  end

  post "/new-block" do |env|
    env.response.headers["Access-Control-Allow-Origin"] = "*"

    data = env.params.json["data"].as(String)
    info = env.params.json["info"].as(String)

    new_block = Block.generate(blockchain[blockchain.size - 1], data, info)

    if Block.is_valid?(new_block, blockchain[blockchain.size - 1])
      blockchain << new_block
      puts "\n"
      p new_block
      puts "\n"
    end

    new_block.to_json
  end

  Kemal.run
end